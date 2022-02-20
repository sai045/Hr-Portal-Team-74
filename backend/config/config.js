const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || db, {
      useNewUrlParser: true,
      autoIndex: true,
    });
    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
