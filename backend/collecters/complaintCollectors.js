const error = require("../models/error");
const { validationResult } = require("express-validator");
const Complaint = require("../models/Complaint");

const getComplaints = async (req, res, next) => {
  try {
    const complaints = await Complaint.find().exec();
    res.json({ complaints });
  } catch (err) {
    return next(Error(err, 500));
  }
};

const createComplaint = async (req, res, next) => {
  const { complaint, Name, Department } = req.body;
  const newComplaint = new Complaint({
    complaint,
    Name,
    Department,
  });

  try {
    await newComplaint.save();
    res.json({ newComplaint: newComplaint.toObject({ getters: true }) });
  } catch (err) {
    return next(Error(err, 500));
  }
};

const deleteComplaints = async (req, res, next) => {
  const cid = req.params.cid;
  let complaint;
  try {
    complaint = await Complaint.findById(cid);
  } catch (err) {
    return next(Error(err, 500));
  }

  if (!complaint) {
    return next(Error("Couldn't find the complint", 500));
  }

  try {
    await complaint.remove();
    res.json({ message: "Complaint deleted" });
  } catch (err) {
    return next(Error(err, 500));
  }
};

exports.getComplaints = getComplaints;
exports.deleteComplaints = deleteComplaints;
exports.createComplaint = createComplaint;
