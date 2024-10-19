const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  productTitle: { type: String, required: true },
  productPrice: { type: Number, required: true },
  quantity: { type: Number, default: 1 }, // Track how many times the product is added
  addedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cart", cartSchema);
