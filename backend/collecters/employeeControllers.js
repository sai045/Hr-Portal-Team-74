const error = require("../models/error");
const { validationResult } = require("express-validator");
const Employee = require("../models/Employee");

const getAllEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.json({
      employees: employees.map((e) => e.toObject({ getters: true })),
    });
  } catch (err) {
    return next(Error(err, 500));
  }
};

const getEmployeeById = async (req, res, next) => {
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

  res.json({ employee: employee.toObject({ getters: true }) });
};

const createEmployee = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    next(Error("InValid Input", 422));
  }
  const { name, email, department, working_hours, salary } = req.body;
  const newEmployee = new Employee({
    name,
    email,
    department,
    working_hours,
    salary,
    travelRequests: [],
  });

  try {
    const employee = await newEmployee.save();
    res.json({ employee: employee.toObject({ getters: true }) });
  } catch (err) {
    return next(Error(err, 500));
  }
};

const updateEmployeeByID = async (req, res, next) => {
  const { name, department } = req.body;
  const eid = req.params.eid;

  let employee;
  try {
    employee = await Employee.findById(eid).exec();
  } catch (err) {
    next(Error(err, 500));
  }

  if (!employee) {
    return next(new Error(`Couldn't find applicant`, 404));
  }

  employee.name = name;
  employee.department = department;

  try {
    await employee.save();
    res.status(200).json({ employee });
  } catch (err) {
    return next(Error(err, 500));
  }
};

const deleteEmployeeById = async (req, res, next) => {
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

  try {
    await employee.remove();
    res.status(200).json({ message: "Deleted employee" });
  } catch (err) {
    return next(Error(err, 500));
  }
};

exports.getAllEmployees = getAllEmployees;
exports.getEmployeeById = getEmployeeById;
exports.createEmployee = createEmployee;
exports.updateEmployeeByID = updateEmployeeByID;
exports.deleteEmployeeById = deleteEmployeeById;
