const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Leaverequests = require("../models/Leaverequests");
const mongoose = require("mongoose");
const Employee = require("../models/Employee");

router.post(
  "/",
  [
    check("employeeId").not().isEmpty(),
    check("leavedate", "Enter valid leave date").isDate(),
    check("days", "Enter number of days required").isNumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { employeeId, leavedate, days } = req.body;

    let leaverequest = new Leaverequests({
      employeeId,
      leavedate,
      days,
    });

    let employee;

    try {
      employee = await Employee.findById(employeeId);
    } catch (err) {
      return next(new Error(err, 500));
    }

    if (!employee) {
      return res.json({ msg: "Couldn't find the employee" });
    }

    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await leaverequest.save({ session: sess });
      employee.leaveRequests.push(leaverequest);
      await employee.save({ session: sess });
      await sess.commitTransaction();
      res.json({ leaverequest });
    } catch (err) {
      console.error(err.message);
      return res.status(500).json("Server error");
    }
  }
);

router.get("/:id", async (req, res) => {
  try {
    const lid = req.params.id;
    const leaverequests = await Leaverequests.findById(lid);

    if (!leaverequests) {
      return res
        .status(500)
        .json({ msg: "There isn't any leave request with this id" });
    }

    res.json(leaverequests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    const leaverequests = await Leaverequests.find({ confirmation: false });
    if (leaverequests.length == 0) {
      return res.json({ message: "No Travel Requests" });
    }
    res.json({
      leaverequests: leaverequests.map((l) => l.toObject({ getters: true })),
    });
  } catch (err) {
    return res.status(500).send("Server Error");
  }
});

router.patch("/:id", async (req, res) => {
  const lid = req.params.id;
  const { confirmation } = req.body;
  let leaverequest;
  try {
    leaverequest = await Leaverequests.findById(lid).exec();
    leaverequest.confirmation = confirmation;
    await leaverequest.save();
  } catch (err) {
    return res.status(500).send("Server Error");
  }

  if (!leaverequest) {
    return res.status(500).json({ msg: "Couldn't find the Travel Request" });
  }
  res.json({ leaverequest });
  console.log(leaverequest);
});

module.exports = router;
