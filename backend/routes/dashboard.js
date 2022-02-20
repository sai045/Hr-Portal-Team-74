const express = require("express");
const Applicant = require("../models/Applicant");
const Employee = require("../models/Employee");
const Leaverequests = require("../models/Leaverequests");
const TravelRequests = require("../models/TravelRequests");

const router = express.Router();

router.get("/get", async (req, res, next) => {
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
        let present = departments.includes(department);

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
        obj.push({ name: department, value: group });
      }
    } catch (err) {
      console.log(err);
    }

    var date = new Date();
    const interviews_today = await Applicant.find({ schedule: date }).count();
    res.json({
      Applicants,
      Employees,
      vacancies,
      leaves,
      travels,
      obj,
      interviews_today,
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/get", async (req, res, next) => {
  let { days } = req.body;
  const leaves = await Leaverequests.find().exec();
  var date = new Date();
  var leaves_count = 0;
  leaves.map((l) => {
    let leavedate = new Date(l.leavedate);
    var difference = Math.round(
      (date.getTime() - leavedate.getTime()) / (1000 * 3600 * 24)
    );
    if (difference > 0 && difference < days) {
      leaves_count += 1;
    }
  });

  const applicants = await Applicant.find().exec();
  var schedule_count = 0;
  applicants.map((a) => {
    let scheduleDate = new Date(a.schedule);
    var difference = Math.round(
      (date.getTime() - scheduleDate.getTime()) / (1000 * 3600 * 24)
    );
    if (difference > 0 && difference < days) {
      schedule_count += 1;
    }
  });

  const employees = await Employee.find().exec();
  var employee_count = 0;
  employees.map((e) => {
    let Hired_date = new Date(e.hired_date);
    var difference = Math.round(
      (date.getTime() - Hired_date.getTime()) / (1000 * 3600 * 24)
    );
    if (difference > 0 && difference < days) {
      employee_count += 1;
    }
    console.log(difference);
  });
  const travels = await TravelRequests.find().exec();
  var travel_count = 0;
  travels.map((t) => {
    let travel_date = new Date(t.applied_date);
    var difference = Math.round(
      (date.getTime() - travel_date.getTime()) / (1000 * 3600 * 24)
    );
    if (difference > 0 && difference < days) {
      travel_count += 1;
    }
    console.log(difference);
  });

  res.json({ leaves_count, schedule_count, employee_count, travel_count });
});

module.exports = router;
