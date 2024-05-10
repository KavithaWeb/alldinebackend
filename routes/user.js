const express = require("express");
// const { check, validationResult } = require("express-validator/check");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../model/User");
// const Image = require("../model/uploads");
const dotenv = require('dotenv');
const twilio = require('twilio');

dotenv.config();

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */




// Twilio Configuration
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);


router.post('/register', async (req, res) => {
  try {

    const { email1, phoneNumber } = req.body;

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const user = new User({
      email1,
      phoneNumber,
      otp,
    });

    await user.save();

    const message = await twilioClient.messages.create({
      body: `Your OTP for registration is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });

    console.log(`OTP sent to ${phoneNumber}: ${message.sid}`);

    res.status(200).json({ message: 'OTP sent successfully' });
  }

  catch (error) {
    console.error('Error during registration:', error);
    res.status(200).json({ message: 'OTP sent successfully' });
  }

});









router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  }
  catch (e) {
    res.status(500).send({ message: e.message });
  }










});









module.exports = router;
