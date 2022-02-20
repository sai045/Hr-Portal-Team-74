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
  }const error = require("../models/error");
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
  
  const groupSalaryByDepartment = async (req, res, next) => {
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
        let group = await Employee.find({ department: departments[i] }).exec();
        groups[i] = group;
      }
    } catch (err) {
      console.log(err);
    }
  
    let GroupSalary = [];
    for (let i = 0; i < groups.length; i++) {
      let length = groups[i].length;
      console.log(length);
      let groupSalary = 0;
      for (let j = 0; j < length; j++) {
        let arrElement = groups[i][j];
        let arrSalary = arrElement.salary;
  
        groupSalary = groupSalary + arrSalary;
      }
  
      GroupSalary.push(groupSalary);
    }
  
    var obj = [];
    for (let k = 0; k < departments.length; k++) {
      let department = departments[k];
      let salary = GroupSalary[k];
      obj.push({ department, salary });
    }
    res.json({ obj });
  };
  
  exports.getSalaryById = getSalaryById;
  exports.getAllSalaries = getAllSalaries;
  exports.updateSalaryById = updateSalaryById;
  exports.groupSalaryByDepartment = groupSalaryByDepartment;
  

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

const groupSalaryByDepartment = async (req, res, next) => {
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
      let group = await Employee.find({ department: departments[i] }).exec();
      groups[i] = group;
    }
  } catch (err) {
    console.log(err);
  }

  let GroupSalary = [];
  for (let i = 0; i < groups.length; i++) {
    let length = groups[i].length;
    console.log(length);
    let groupSalary = 0;
    for (let j = 0; j < length; j++) {
      let arrElement = groups[i][j];
      let arrSalary = arrElement.salary;

      groupSalary = groupSalary + arrSalary;
    }

    GroupSalary.push(groupSalary);
  }

  var obj = [];
  for (let k = 0; k < departments.length; k++) {
    let department = departments[k];
    let salary = GroupSalary[k];
    obj.push({ department, salary });
  }
  res.json({ obj });
};

exports.getSalaryById = getSalaryById;
exports.getAllSalaries = getAllSalaries;
exports.updateSalaryById = updateSalaryById;
exports.groupSalaryByDepartment = groupSalaryByDepartment;
