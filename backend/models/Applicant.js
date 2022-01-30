const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  qualification: { type: String, required: true },
  position: { type: String, required: true },
  experience: { type: Number, required: true },
  resume: { type: String },
});

// applicantSchema.plugin(applicantSchema)

module.exports = mongoose.model("Applicant", applicantSchema);
