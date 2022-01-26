const error = require("../models/error");
const { validationResult } = require("express-validator");

let DUMMY_APPLICANTS = [
  {
    id: "a1",
    name: "Damon Salvatore",
    qualification: "big brother",
    experience: 4,
    position: "bourbon",
  },
  {
    id: "a2",
    name: "Stefan Salvatore",
    qualification: "little brother",
    experience: 2,
    position: "hero hair",
  },
];

const getAllApplicants = (req, res, next) => {
  const applicants = DUMMY_APPLICANTS;
  res.json({ applicants });
};

const getApplicantById = (req, res, next) => {
  const aid = req.params.aid;
  const applicant = DUMMY_APPLICANTS.find((a) => {
    return a.id == aid;
  });
  if (!applicant) {
    return next(new Error(`Couldn't find applicant`, 404));
  }

  //   res.json({ applicant });
  res.json({ applicant });
};

const createApplicant = (req, res, next) => {
  const { id, name, experience, qualification, position } = req.body;
  const newApplicant = {
    id,
    name,
    experience,
    qualification,
    position,
  };
  DUMMY_APPLICANTS.push(newApplicant);
  res.json({ DUMMY_APPLICANTS });
};

const getResumeById = (req,res,next) => {}

exports.getAllApplicants = getAllApplicants;
exports.getApplicantById = getApplicantById;
exports.createApplicant = createApplicant;
exports.getResumeById = getResumeById;
