const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: "true",
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  password: {
    type: String,
    required: "true",
  },
  status: {
    type: String,
    enum: ["doctor", "patient"],
    default: "patient",
  },
  speciality: {
    type: String,
    enum: [
      "surgery",
      "pediatrics",
      "general medicine",
      "gynecology",
      "neurology",
      "radiology",
      "cardiology",
      "others",
    ],
    default: null,
  },
});

module.exports = mongoose.model("UserModel", UserSchema);
