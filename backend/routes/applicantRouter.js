const express = require("express");

const { check } = require("express-validator");

const router = express.Router();

const applicantController = require("../collecters/applicantCollector");

router.get("/", applicantController.getAllApplicants);

router.get("/:aid", applicantController.getApplicantById);

router.post(
  "/",
  [
    check("name").not().isEmpty(),
    check("qualification").not().isEmpty(),
    check("position").not().isEmpty(),
    check("experience").not().isEmpty(),
  ],
  applicantController.createApplicant
);

router.delete("/:aid", applicantController.deleteApplicantById);

router.patch("/:aid", applicantController.editResumeById);

router.get("/schedule/date", applicantController.getAllSchedule);

module.exports = router;
