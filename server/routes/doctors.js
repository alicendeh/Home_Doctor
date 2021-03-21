const express = require("express");
const Users = require("../Models/Users");
const Auth = require("../middleware/Auth");

const router = express.Router();

router.get("/", Auth, async (req, res) => {
  try {
    let stat = req.user.id.status;

    let user = await Users.find({}).where("status").equals("doctor");
    
      res.json({user});
    

  
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
    console.log(error.message);
  }
});

module.exports = router;
