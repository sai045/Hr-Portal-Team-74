const express = require("express");
const Applicant = require("../models/Applicant");
const Employee = require("../models/Employee");
const Leaverequests = require("../models/Leaverequests");
const TravelRequests = require("../models/TravelRequests");

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  const total_employees_needed = 120;
  let Applicants, Employees, vacancies, leaves, travels;
  try {
    Applicants = await Applicant.find().count();
    Employees = await Employee.find().count();
    vacancies = total_employees_needed - Employees;
    leaves = await Leaverequests.find().count();
    travels = await TravelRequests.find().count();
    let departments = [];
    try {
      const employees = await Employee.find().exec();
      employees.map((e) => {
        let department = e.department;
        let present = departments.includes();

        if (present) {
        } else {
          departments.push(department);
        }
      });
    } catch (err) {
      console.log(err);
    }

    var groups = [];
    try {
      for (let i = 0; i < departments.length; i++) {
        let group = await Employee.find({ department: departments[i] }).count();
        groups[i] = group;
      }
      var obj = [];
      for (let k = 0; k < departments.length; k++) {
        let department = departments[k];
        let group = groups[k];
        obj.push({ department, group });
      }
    } catch (err) {
      console.log(err);
    }

    // res.json({ obj });
    res.json({ Applicants, Employees, vacancies, leaves, travels, obj });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
