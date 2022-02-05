const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
  from: { type: String, required: true, sparse: true },
  to: { type: String, required: true },
  employeeId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Employee",
  },
  confirmation: { type: Boolean, default: false },
  id: { type: String },
  // 0 - under consideration
  // 1 - confirmed
  // -1 - rejected
});

module.exports = mongoose.model("Travel", travelSchema);
