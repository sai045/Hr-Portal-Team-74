const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  const user = await User.findById(id).exec();
  if (!user) {
    return res.json({ message: "User doesnt exist" });
  }

  const username = user.name;
  res.json({ user });
});

module.exports = router;
