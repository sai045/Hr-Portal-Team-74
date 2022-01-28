const mongoose = require("mongoose");

const complaintSchema = mongoose.Schema({
  Name: { type: String, required: true },
  complaint: { type: String, required: true },
  Department: { type: String, required: true },
});

module.exports = mongoose.model("Complaints", complaintSchema);
