const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hey there")
})

module.exports = router