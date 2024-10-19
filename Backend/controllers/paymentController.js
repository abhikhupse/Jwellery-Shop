// paymentController.js

const Order = require("../models/Order");

exports.processPayment = async (req, res) => {
  console.log("Request body:", req.body); // Log the request body
  const { userId, cart, totalPrice, address } = req.body;

  // Log values received
  console.log("User ID:", userId);
  console.log("Cart:", cart);
  console.log("Total Price:", totalPrice);
  console.log("Address:", address);

  // Create a new order instance
  const newOrder = new Order({
    userId,
    cart,
    totalPrice,
    address,
  });

  try {
    await newOrder.save();
    res.status(201).json({
      message: "Order processed successfully!",
      orderId: newOrder._id,
    });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ message: "Failed to process order" });
  }
};
