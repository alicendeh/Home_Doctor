const express = require("express");
const Users = require("../Models/Users");
const Auth = require("../middleware/Auth");
const App = require("../Models/Appointment");
const { check, validationResult } = require("express-validator");

const router = express.Router();

//get all doctors in the system
router.get("/", Auth, async (req, res) => {
  try {
    

    let user = await Users.find({})
      .where("status")
      .equals("doctor")
      .sort({ Date: -1 });

    res.json({ user });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
    console.log(error.message);
  }
});

//book an appointment

router.post(
  "/apointment",
  [
    Auth,
    [
      check("aName", "Please enter the patients name").not().isEmpty(),
      check("aTel", "Please enter the patients telephone number")
        .not()
        .isEmpty()
        .isLength({ min: 9, max: 9 }),
      check("aProb", "Please enter the patients problem").not().isEmpty(),
      check("aName", "Please enter an appointment time").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let { docID, aName, aTel, aProb, aTime, user } = req.body;
    try {
      let appointment = new App({
        docID,
        aName,
        aTel,
        aProb,
        aTime,
        user: req.user.id,
        aStatus:"pending"
      });
      await appointment.save();

      res.status(200).json({appointment});

    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
      console.log(error.message);
    }
  }
);
//fetching particular doctors appoiintment
router.get("/apointment/getAll",Auth,async(req,res)=>{
  try {
    

    let user = await App.find({})
      .where("docID")
      .equals(req.user.id)
      

    res.json({ user });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
    console.log(error.message);
  }

})

// // update a docs field to approval
router.put("/update/approve/:id",Auth,async(req,res)=>{
  try {
    let appointment = await App.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true
    })
    if (!appointment) {
      return res.status(400).json({ msg: "No such appointment" });
    }
    return res.status(200).json({ appointment });

  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
    console.log(error.message);
  }
})

module.exports = router;
