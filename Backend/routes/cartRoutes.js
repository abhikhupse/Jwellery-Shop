const express = require("express");
const { addToCart, getUserCart } = require("../controllers/cartController");
const router = express.Router();

// Add product to cart
router.post("/add", addToCart);

// Get user's cart
router.get("/:userId", getUserCart);

module.exports = router;
