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

router.get("/resume/:aid", applicantController.getResumeById);

router.patch("/resume/:aid", applicantController.editResumeById);

router.delete("/resume/:aid", applicantController.deleteResumeById);

module.exports = router;
