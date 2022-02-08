const express = require("express");

const { check } = require("express-validator");

const router = express.Router();

const salaryCollecters = require("../collecters/salaryCollecters");

router.get("/", salaryCollecters.groupSalaryByDepartment);

router.get("/:eid", salaryCollecters.getSalaryById);

router.patch("/:eid", salaryCollecters.updateSalaryById);

// router.get("/")

module.exports = router;
