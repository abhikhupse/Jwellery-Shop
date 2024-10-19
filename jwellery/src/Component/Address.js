import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate
import "../Styles/Address.css"; // Import any necessary styles

const Address = () => {
  const location = useLocation(); // Get the location object
  const { cart } = location.state || {}; // Retrieve cart items from state
  const navigate = useNavigate(); // Initialize the navigate function

  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Address submitted:", address);

    try {
      // Assuming you have the userId available
      const userId = "6490fda4a5830c36f5d55f4d"; // Replace with actual user ID from your state/context

      const response = await fetch("http://localhost:5000/api/address/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId, // Use the actual user ID
          ...address, // Spread address fields (name, street, city, etc.)
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Optional: Show success message
        // Navigate to payment only after successful saving of address
        navigate("/payment", { state: { cart } });
      } else {
        console.error("Failed to save address");
      }
    } catch (error) {
      console.error("Error saving address:", error);
    }
  };

  return (
    <div className="address-container">
      <h1 className="address-header">Shipping Address</h1>
      <form className="address-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={address.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="street"
          placeholder="Street Address"
          value={address.street}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={address.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={address.state}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={address.zip}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default Address;
