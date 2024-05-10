const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

  email1: String,
  phoneNumber: String,
  otp: String,

});


module.exports = mongoose.model("users", UserSchema, "users");
