const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const Error = require("./models/error");
const ApplicantRouter = require("./routes/applicantRouter");
const EmployeeRouter = require("./routes/employeeRouter");

app.use(bodyParser.json());

app.use("/applicant", ApplicantRouter);

app.use("/employee", EmployeeRouter);

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

app.listen(5000, () => {
  console.log("Server running at 5000");
});
