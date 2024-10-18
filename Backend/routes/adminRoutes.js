// backend/routes/adminRoutes.js
const express = require("express");
const { loginAdmin, createAdmin } = require("../controllers/adminController");

const router = express.Router();

// Route for admin login
router.post("/login", loginAdmin);

// Route for creating an admin user
router.post("/create", createAdmin); // Add this line for creating an admin user

module.exports = router;
