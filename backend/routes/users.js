const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Enter valid email id").isEmail(),
    check(
      "password",
      "Please enter password with 8 or more characters"
    ).isLength({ min: 8 }),
    check("location", "Enter your location").not().isEmpty(),
    check("number", "Enter your contact number")
      .isNumeric()
      .isLength({ max: 10 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, location, number } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      user = new User({
        name,
        email,
        password,
        location,
        number,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      try {
        const result = await user.save();
        console.log(result);
      } catch (err) {
        res.json({ err });
        console.log(err);
      }

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(payload, config.get("jwtSecret"), (err, token) => {
        if (err) throw err;
        id = user.id;
        res.json({ id });
        console.log(id);
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json("Server error");
    }
  }
);

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await User.findById(id);

    if (!users) {
      return res.status(500).json({ msg: "There isn't any user with this id" });
    }

    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find({ confirmation: false });
    if (users.length == 0) {
      return res.json({ message: "No Users" });
    }
    res.json({ users });
  } catch (err) {
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
