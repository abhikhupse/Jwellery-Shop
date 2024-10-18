const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// Login function with logs
exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  console.log(`[INFO] Admin login attempt with email: ${email}`);

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      console.warn(`[WARN] Admin not found: ${email}`);
      return res
        .status(404)
        .json({ success: false, message: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      console.warn(`[WARN] Invalid credentials for admin: ${email}`);
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log(`[INFO] Admin login successful: ${email}`);
    return res.status(200).json({ success: true, token });
  } catch (error) {
    console.error(`[ERROR] Admin login failed: ${error.message}`);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error });
  }
};

// Create admin function with logs
exports.createAdmin = async (req, res) => {
  const { email, password } = req.body;
  console.log(`[INFO] Creating admin with email: ${email}`);

  try {
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      console.warn(`[WARN] Admin already exists: ${email}`);
      return res
        .status(400)
        .json({ success: false, message: "Admin user already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(`[INFO] Password hashed successfully for admin: ${email}`);

    const newAdmin = new Admin({
      email,
      password: hashedPassword,
    });

    await newAdmin.save();
    console.log(`[INFO] Admin created successfully: ${email}`);

    return res
      .status(201)
      .json({ success: true, message: "Admin user created successfully" });
  } catch (error) {
    console.error(`[ERROR] Failed to create admin: ${error.message}`);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error });
  }
};
