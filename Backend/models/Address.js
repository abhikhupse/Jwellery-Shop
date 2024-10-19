const mongoose = require("mongoose");

// Define the Address schema
const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to User model
      required: true,
    },
    name: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  { timestamps: true }
); // Automatically add createdAt and updatedAt fields

const Address = mongoose.model("Address", addressSchema);
module.exports = Address;
