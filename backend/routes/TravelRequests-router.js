const express = require("express");

const { check } = require("express-validator");

const router = express.Router();

const travelCollecters = require("../collecters/travelRequests-collecters");

router.get("/", travelCollecters.getAllTravelRequests);

router.post(
  "/",
  [
    check("employeeId").not().isEmpty(),
    check("from").not().isEmpty(),
    check("to").not().isEmpty(),
  ],
  travelCollecters.createTravelRequests
);

router.get("/:tid", travelCollecters.getTravelRequestById);

router.delete("/:tid", travelCollecters.deleteTravelRequestById);

module.exports = router;
