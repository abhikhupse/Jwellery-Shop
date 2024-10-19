const express = require("express");
const { saveAddress } = require("../controllers/addressController");
const router = express.Router();

// POST request to store the address
router.post("/save", saveAddress);

module.exports = router;
