const error = require("../models/error");
const { validationResult } = require("express-validator");

let DUMMY_EMPLOYEES = [
  {
    id: "e1",
    name: "Klaus Mikaelson",
    qualification: "little brother",
    experience: 4,
    position: "King",
  },
  {
    id: "e2",
    name: "Elijah Mikaelson",
    qualification: "big brother",
    experience: 4,
    position: "Noble man",
  },
];

const getAllEmployees = (req, res, next) => {
  const employees = DUMMY_EMPLOYEES;
  res.json({ employees });
};

const getEmployeeById = (req, res, next) => {
  const eid = req.params.eid;
  const employee = DUMMY_EMPLOYEES.find((e) => {
    return e.id == eid;
  });
  if (!employee) {
    return next(new Error(`Couldn't find employee`, 404));
  }

  //   res.json({ applicant });
  res.json({ employee });
};

const createEmployee = (req, res, next) => {
  const { id, name, experience, qualification, position } = req.body;
  const newEmployee = {
    id,
    name,
    experience,
    qualification,
    position,
  };
  DUMMY_EMPLOYEES.push(newEmployee);
  res.json({ DUMMY_EMPLOYEES });
};

const updateEmployeeByID = (req, res, next) => {
  const { name, position } = req.body;
  const eid = req.params.eid;

  const employee = { ...DUMMY_EMPLOYEES.find((e) => (e.id = eid)) };
  const employeeIndex = DUMMY_EMPLOYEES.findIndex((e) => e.id == eid);
  employee.name = name;
  employee.position = position;

  DUMMY_EMPLOYEES[employeeIndex] = employee;
  res.status(200).json({ employee });
};

const deleteEmployeeById = (req, res, next) => {
  const eid = req.params.eid;
  DUMMY_EMPLOYEES = DUMMY_EMPLOYEES.filter((e) => e.id !== eid);
  res.status(200).json({ message: "Deleted employee" });
};

exports.getAllEmployees = getAllEmployees;
exports.getEmployeeById = getEmployeeById;
exports.createEmployee = createEmployee;
exports.updateEmployeeByID = updateEmployeeByID;
exports.deleteEmployeeById = deleteEmployeeById;
