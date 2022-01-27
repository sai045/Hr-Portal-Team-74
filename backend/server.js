const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const Error = require("./models/error");

const ApplicantRouter = require("./routes/applicantRouter");
const EmployeeRouter = require("./routes/employeeRouter");
const TravelRouter = require("./routes/TravelRequests-router");
const connectDB = require("./config/config");

connectDB();

app.use(bodyParser.json());

app.use("/applicant", ApplicantRouter);

app.use("/employee", EmployeeRouter);

app.use("/travel", TravelRouter);

app.use("/api/users", require("./routes/users"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/auth", require("./routes/auth"));

app.use((req, res, next) => {
  const error = new Error("Couldn't find this route", 404);
  return next(error);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured " });
});

// mongoose
//   .connect(
//     "mongodb+srv://klaus:klaus123@hr-portal.kx5ek.mongodb.net/Hr-Portal?retryWrites=true&w=majority",
//     // "jwtSecret" = "mySecret"
//   )
//   .then(() => {
//     app.listen(5000, () => {
//       console.log("Server running at 5000");
//     });
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     throw new Error(err, 404);
//   });

app.listen(5000);
