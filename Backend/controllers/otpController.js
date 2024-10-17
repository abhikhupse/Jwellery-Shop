const crypto = require("crypto");
const nodemailer = require("nodemailer");
const User = require("../models/userModel"); // Ensure this model is correct

// In-memory storage for OTPs (Use Redis for production)
const otpStore = {};

// Configure Nodemailer with Ethereal SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, // Use TLS with port 587
  auth: {
    user: "abhikhupse1009@gmail.com", // Replace with your Ethereal user
    pass: "bttncgmrlermfadl", // Replace with your Ethereal password
  },
  tls: {
    rejectUnauthorized: false, // Helps with potential TLS issues
  },
});

// Generate and Send OTP
const sendOtp = async (req, res) => {
  const { email } = req.body;
  console.log("Request to send OTP received for email:", email);

  // Check if user exists
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found:", email);
      return res
        .status(404)
        .json({ message: "User not found. Please register first." });
    }
    console.log("User found:", email);

    // Generate 6-digit OTP and store it
    const otp = crypto.randomInt(100000, 999999).toString();
    otpStore[email] = otp;
    console.log(`Generated OTP for ${email}: ${otp}`);

    const mailOptions = {
      from: '"OTP Service" <abhikhupse1009@gmail.com>', // Sender info
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}. It is valid for 5 minutes.`,
    };

    // Send OTP email and log the preview URL
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending OTP:", error);
        return res
          .status(500)
          .json({ message: "Failed to send OTP", error: error.toString() });
      }

      console.log("OTP sent successfully:", info.response);
      console.log("Preview URL:", nodemailer.getTestMessageUrl(info)); // Preview link for testing

      res.json({
        success: true,
        message: "OTP sent to your email successfully.",
      });
    });

    // Clear OTP after 5 minutes
    setTimeout(() => {
      console.log(`Clearing OTP for ${email}`);
      delete otpStore[email];
    }, 300000); // 5 minutes
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Verify OTP
const verifyOtp = (req, res) => {
  const { email, otp } = req.body;
  console.log(`OTP verification request for ${email} with OTP: ${otp}`);

  if (otpStore[email] && otpStore[email] === otp) {
    delete otpStore[email]; // Remove OTP after use
    console.log("OTP verified successfully for:", email);
    return res.json({ success: true, message: "OTP verified successfully!" });
  }

  console.log("Invalid or expired OTP for:", email);
  res
    .status(400)
    .json({ message: "Invalid or expired OTP. Please try again." });
};

module.exports = { sendOtp, verifyOtp };
