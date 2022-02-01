const error = require("../models/error");
const { validationResult } = require("express-validator");
const Applicant = require("../models/Applicant");

const getAllApplicants = async (req, res, next) => {
  try {
    const applicants = await Applicant.find().exec();
    res.json({
      applicants: applicants.map((applicant) =>
        applicant.toObject({ getters: true })
      ),
    });
  } catch (err) {
    return next(Error(err, 500));
  }
};

const getApplicantById = async (req, res, next) => {
  const aid = req.params.aid;

  let applicant;

  try {
    applicant = await Applicant.findById(aid).exec();
  } catch (err) {
    next(Error(err, 500));
  }

  if (!applicant) {
    return next(new Error(`Couldn't find applicant`, 404));
  }

  res.json({ applicant });
};

const createApplicant = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    next(Error("InValid Input", 422));
  }
  const { name, experience, qualification, position } = req.body;
  const newApplicant = new Applicant({
    // resume,
    name,
    experience,
    qualification,
    position,
  });

  try {
    const applicant = await newApplicant.save();
    const id = newApplicant._id.toString();
    const resumeLink = `http://localhost:3000/resume/${id}`;
    applicant.resume = resumeLink;
    try {
      await applicant.save();
    } catch (err) {
      console.log(err);
    }
    res.json({ applicant });
  } catch (err) {
    return next(Error(err, 500));
  }
};

const getResumeById = async (req, res, next) => {
  const aid = req.params.aid;

  let applicant;

  try {
    applicant = await Applicant.findById(aid).exec();
  } catch (err) {
    next(Error(err, 500));
  }

  if (!applicant) {
    return next(new Error(`Couldn't find applicant`, 404));
  }

  const resume = applicant.resume;
  res.json({ resume });
};

const editResumeById = async (req, res, next) => {
  const aid = req.params.aid;

  let applicant;
  try {
    applicant = await Applicant.findById(aid).exec();
  } catch (err) {
    next(Error(err, 500));
  }

  if (!applicant) {
    return next(new Error(`Couldn't find applicant`, 404));
  }

  const { resume } = req.body;
  applicant.resume = resume;

  try {
    await applicant.save();
  } catch (err) {
    return next(Error(err, 500));
  }

  res.json({ applicant });
};

const deleteResumeById = async (req, res, next) => {
  const aid = req.params.aid;

  let applicant;
  try {
    applicant = await Applicant.findById(aid).exec();
  } catch (err) {
    next(Error(err, 500));
  }

  if (!applicant) {
    return next(new Error(`Couldn't find applicant`, 404));
  }

  try {
    await applicant.remove();
  } catch (err) {
    return next(Error(err, 500));
  }
  res.status(200).json({ message: "Deleted Applicant" });
};

exports.getAllApplicants = getAllApplicants;
exports.getApplicantById = getApplicantById;
exports.createApplicant = createApplicant;
exports.getResumeById = getResumeById;
exports.editResumeById = editResumeById;
exports.deleteResumeById = deleteResumeById;
