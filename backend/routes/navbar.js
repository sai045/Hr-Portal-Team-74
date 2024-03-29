const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const router = express.Router();

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.json({ message: "User doesnt exist" });
    }
    res.json({ user });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
