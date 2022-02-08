const mongoose = require("mongoose");

const leaverequestsSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Employee",
  },
  leavedate: {
    type: Date,
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
  confirmation: { type: Boolean, default: false },
});

module.exports = Leaverequests = mongoose.model(
  "leaverequests",
  leaverequestsSchema
);
