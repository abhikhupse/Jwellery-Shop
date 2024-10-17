const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const { sendOtp, verifyOtp } = require("../controllers/otpController");
const {
  validateUserRegistration,
  validateUserLogin,
} = require("../middlewares/validation");

const router = express.Router();

// Register a new user
router.post("/register", validateUserRegistration, registerUser);

// Login user
router.post("/login", validateUserLogin, loginUser);

// OTP routes
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

module.exports = router;
