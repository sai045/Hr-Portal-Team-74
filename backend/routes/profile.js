const express = require("express");
const router = express.Router();

const Profile = require("./profile");
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    );

    if (!profile) {
      return res.status(500).json({ msg: "Profile doesn't exist" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
