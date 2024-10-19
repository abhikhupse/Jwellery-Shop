const Address = require("../models/Address");

// Store shipping address in the database
const saveAddress = async (req, res) => {
  const { userId, name, street, city, state, zip } = req.body;

  // Check if all fields are provided
  if (!userId || !name || !street || !city || !state || !zip) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newAddress = new Address({ userId, name, street, city, state, zip });
    await newAddress.save(); // Save the address in the database

    res
      .status(201)
      .json({ success: true, message: "Address saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { saveAddress };
