const error = require("../models/error");
const { validationResult } = require("express-validator");
const Employee = require("../models/Employee");
const Travel = require("../models/TravelRequests");
const Leave = require("../models/Leaverequests");

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
    // return next(error("InValid Input", 422));
    return res.json({ errors });
  }
  const { name, email, department, working_hours, salary, dashboard } =
    req.body;
  const newEmployee = new Employee({
    name,
    email,
    department,
    working_hours,
    salary,
    travelRequests: [],
    leaveRequests: [],
  });

  try {
    const employee = await newEmployee.save();
    res.json({ employee });
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

const getTravelsByEmployeeId = async (req, res, next) => {
  const eid = req.params.eid;

  let travels;
  let employee;
  try {
    employee = await Employee.findById(eid).exec();
  } catch (err) {
    next(Error(err, 500));
  }

  travels = employee.travelRequests;
  let travelJSON = [];
  for (let i = 0; i < travels.length; i++) {
    try {
      let TRAVEL = await Travel.findById(travels[i]);
      travelJSON.push(TRAVEL);
    } catch (err) {
      console.log(err);
      next(Error(err, 500));
    }
  }

  res.json({ travelJSON });
};

const getLeavesByEmployeeId = async (req, res, next) => {
  const eid = req.params.eid;

  let leaves;
  let employee;
  try {
    employee = await Employee.findById(eid).exec();
  } catch (err) {
    next(Error(err, 500));
  }

  leaves = employee.leaveRequests;
  let leaveJSON = [];
  for (let i = 0; i < leaves.length; i++) {
    try {
      let LEAVE = await Leave.findById(leaves[i]);
      leaveJSON.push(LEAVE);
    } catch (err) {
      console.log(err);
      next(Error(err, 500));
    }
  }

  res.json({ leaveJSON });
};

exports.getAllEmployees = getAllEmployees;
exports.getEmployeeById = getEmployeeById;
exports.createEmployee = createEmployee;
exports.updateEmployeeByID = updateEmployeeByID;
exports.deleteEmployeeById = deleteEmployeeById;
exports.getTravelsByEmployeeId = getTravelsByEmployeeId;
exports.getLeavesByEmployeeId = getLeavesByEmployeeId;
