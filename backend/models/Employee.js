const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  email: { type: String, required: true },
  working_hours: { type: Number, required: true },
  salary: { type: Number, required: true },
  travelRequests: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Travel",
    },
  ],
});

module.exports = mongoose.model("Employee", employeeSchema);
