const error = require("../models/error");
const { validationResult } = require("express-validator");
const Employee = require("../models/Employee");

const getSalaryById = async (req, res, next) => {
  const eid = req.params.eid;
  let employee;
  try {
    employee = await Employee.findById(eid).exec();
  } catch (err) {
    next(Error(err, 500));
  }

  if (!employee) {
    return next(new Error(`Couldn't find employee`, 404));
  }

  const salary = employee.salary;
  res.json({ salary });
};

const getAllSalaries = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    let salaries = [];
    employees.map((e) => {
      id = e.id;
      salary = e.salary;
      salaries.push({ id, salary });
    });
    res.json({ salaries });
  } catch (err) {
    return next(Error(err, 500));
  }
};

const updateSalaryById = async (req, res, next) => {
  const eid = req.params.eid;
  let employee;
  try {
    employee = await Employee.findById(eid).exec();
  } catch (err) {
    next(Error(err, 500));
  }

  if (!employee) {
    return next(new Error(`Couldn't find employee`, 404));
  }

  const { salary } = req.body;

  employee.salary = salary;

  try {
    await employee.save();
    res.json({ salary });
  } catch (err) {
    return next(Error(err, 500));
  }
};

exports.getSalaryById = getSalaryById;
exports.getAllSalaries = getAllSalaries;
exports.updateSalaryById = updateSalaryById;
