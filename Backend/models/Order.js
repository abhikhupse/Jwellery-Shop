const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  //   userId: { type: String, required: true },
  cart: { type: Array, required: true },
  totalPrice: { type: Number, required: true },
  address: { type: String, required: true },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
