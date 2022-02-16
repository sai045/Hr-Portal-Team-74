const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const router = express.Router();

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  // id = id.toObject();

  // console.log(isValidObjectId(id));
  try {
    const Id = mongoose.Types.ObjectId(id);
    const user = await User.findById(Id).exec();
    if (!user) {
      return res.json({ message: "User doesnt exist" });
    }
    // const username = user.name;
    res.json({ user });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
