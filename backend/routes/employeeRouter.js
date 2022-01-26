const express = require("express");

const { check } = require("express-validator");

const router = express.Router();

const employeeController = require("../collecters/employeeControllers");

router.get("/", employeeController.getAllEmployees);

router.get("/:eid", employeeController.getEmployeeById);

router.post("/", employeeController.createEmployee);

router.patch("/:eid", employeeController.updateEmployeeByID);

router.delete("/:eid", employeeController.deleteEmployeeById);

module.exports = router;
