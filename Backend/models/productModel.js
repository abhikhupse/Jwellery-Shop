// models/productModel.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    material: { type: String },
    weight: { type: String },
    gemstone: { type: String },
    size: { type: String },
    image: { type: String }, // Store image URL or base64 string
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
