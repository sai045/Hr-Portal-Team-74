const express = require("express");
const auth = require("../Middleware/auth");

const { check } = require("express-validator");

const router = express.Router();

const employeeController = require("../collecters/employeeControllers");

router.get("/", employeeController.getAllEmployees);

router.get("/:eid", employeeController.getEmployeeById);

router.get("/travel/:eid", employeeController.getTravelsByEmployeeId);

router.get("/leave/:eid", employeeController.getLeavesByEmployeeId);

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
