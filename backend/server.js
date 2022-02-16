const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const Error = require("./models/error");

const cors = require("cors");

const ApplicantRouter = require("./routes/applicantRouter");
const EmployeeRouter = require("./routes/employeeRouter");
const TravelRouter = require("./routes/TravelRequests-router");
const SalaryRouter = require("./routes/salaryRouter");
const complaintsRouter = require("./routes/complaintRoutes");
const leaveRouter = require("./routes/leaverequests");
const connectDB = require("./config/config");

connectDB();

app.use(bodyParser.json());

app.use(cors());

app.use("/applicant", ApplicantRouter);

app.use("/employee", EmployeeRouter);

app.use("/travel", TravelRouter);

app.use("/salary", SalaryRouter);

app.use("/complaints", complaintsRouter);

app.use("/leave", leaveRouter);

app.use("/api/users", require("./routes/users"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/auth", require("./routes/auth"));
app.use("/", require("./routes/navbar"));

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

app.listen(5000);
