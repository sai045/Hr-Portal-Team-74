const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
  from: { type: String, required: true, sparse: true },
  to: { type: String, required: true },
  employeeId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Employee",
  },
  
});

module.exports = mongoose.model("Travel", travelSchema);
