const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  qualification: { type: String, required: true },
  department: { type: String, required: true },
  experience: { type: Number, required: true },
  schedule: { type: Array },
});

module.exports = mongoose.model("Applicant", applicantSchema);
