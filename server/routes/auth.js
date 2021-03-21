const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const Users = require("../Models/Users");

const router = express.Router();


//Users LOGIN:PUBLIC
router.post(
  "/",
  [
    // check("username", "Please a Valid Name").not().isEmpty(),
    check("email", "Please enter a valid email address").isEmail(),
    check(
      "password",
      "Your Password should be more than 7 characters"
    ).isLength({ min: 7 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {  email, password,  } = req.body;

    try {
      let user = await Users.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const match = await bcrypt.compare(password,user.password)
        if (!match) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };
      await jwt.sign(
        payload,
        "alyatech",
        {
          expiresIn: 36000,
        },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({ token });
        }
      );
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
      console.log(error.message);
    }
  }
);

module.exports = router;
