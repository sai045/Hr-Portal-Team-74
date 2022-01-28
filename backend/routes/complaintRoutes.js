const express = require("express");

const { check } = require("express-validator");

const router = express.Router();

const complaintCollectors = require("../collecters/complaintCollectors");

router.get("/", complaintCollectors.getComplaints);

router.post("/", complaintCollectors.createComplaint);

router.delete("/:cid", complaintCollectors.deleteComplaints);

module.exports = router;
