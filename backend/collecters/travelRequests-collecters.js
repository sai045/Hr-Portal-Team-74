const Error = require("../models/error");
const { validationResult } = require("express-validator");
const Travel = require("../models/TravelRequests");
const Employee = require("../models/Employee");
const mongoose = require("mongoose");
const { json } = require("body-parser");

const getAllTravelRequests = async (req, res, next) => {
  try {
    const travels = await Travel.find({ confirmation: false });
    if (travels.length == 0) {
      return res.json({ message: "No Travel Requests" });
    }
    res.json({ travels: travels.map((t) => t.toObject({ getters: true })) });
  } catch (err) {
    return next(Error(err, 500));
  }
};

const getTravelRequestById = async (req, res, next) => {
  const tid = req.params.tid;
  let travel;
  try {
    travel = await Travel.findById(tid);
  } catch (err) {
    return next(new Error(err, 500));
  }

  if (!travel) {
    return next(Error("Couldn't find the complint", 500));
  }

  res.json({ travel });
};

const createTravelRequests = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    next(Error("InValid Input", 422));
  }

  const { employeeId, from, to } = req.body;
  const newTravel = new Travel({
    employeeId,
    from,
    to,
  });

  let employee;

  try {
    employee = await Employee.findById(employeeId);
  } catch (err) {
    return next(new Error(err, 500));
  }

  if (!employee) {
    return next(new Error("Couldn't find the emplyee", 500));
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    employee.travelRequests.push(newTravel);
    await newTravel.save({ session: sess });
    newTravel.id = newTravel._id;
    await newTravel.save({ session: sess });
    await employee.save({ session: sess });
    await sess.commitTransaction();
    res.json({ newTravel });
  } catch (err) {
    return next(new Error(err, 500));
  }
};

const confirmTravelRequestById = async (req, res, next) => {
  const tid = req.params.tid;

  const { confirmation } = req.body;

  let travel;
  try {
    travel = await Travel.findById(tid).exec();
    travel.confirmation = confirmation;
    await travel.save();
  } catch (err) {
    return next(Error(err, 500));
  }

  if (!travel) {
    return next(Error("Couldn't find the Travel Request", 500));
  }

  res.json({ travel });
  console.log(travel);
};

exports.getAllTravelRequests = getAllTravelRequests;
exports.confirmTravelRequestById = confirmTravelRequestById;
exports.createTravelRequests = createTravelRequests;
exports.getTravelRequestById = getTravelRequestById;
