const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  qualification: { type: String, required: true },
  position: { type: String, required: true },
  experience: { type: Number, required: true },
  travelRequests: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Travel",
    },
  ],
});

module.exports = mongoose.model("Employee", employeeSchema);
