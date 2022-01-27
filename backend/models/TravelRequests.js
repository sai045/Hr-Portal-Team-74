const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  //   tid: { type: String, required: true, unique: true },

  employeeId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Employee",
  },
});

module.exports = mongoose.model("Travel", travelSchema);
