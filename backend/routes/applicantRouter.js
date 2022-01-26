const express = require("express");

const { check } = require("express-validator");

const router = express.Router();

const applicantController = require("../collecters/applicantCollector");

router.get("/", applicantController.getAllApplicants);

router.get("/:aid", applicantController.getApplicantById);

router.post("/", applicantController.createApplicant);

router.get("/resume/:id", applicantController.getResumeById);

module.exports = router;
