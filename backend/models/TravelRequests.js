const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  employeeId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Employee",
  },
  // tid: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Travel", travelSchema);
