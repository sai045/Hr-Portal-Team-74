const express = require("express");

const { check } = require("express-validator");

const router = express.Router();

const employeeController = require("../collecters/employeeControllers");

router.get("/", employeeController.getAllEmployees);

router.get("/:eid", employeeController.getEmployeeById);

router.get("/travel/:eid", employeeController.getTravelsByEmployeeId);

router.post(
  "/",
  [
    check("name").not().isEmpty(),
    check("department").not().isEmpty(),
    check("email").isEmail(),
    check("working_hours").not().isEmpty(),
    check("salary").not().isEmpty(),
  ],
  employeeController.createEmployee
);

router.patch("/:eid", employeeController.updateEmployeeByID);

router.delete("/:eid", employeeController.deleteEmployeeById);

module.exports = router;
