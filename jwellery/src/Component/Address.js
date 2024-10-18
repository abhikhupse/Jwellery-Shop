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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the address submission
    console.log("Address submitted:", address);
    // Navigate to the Payment page, passing the cart items
    navigate("/payment", { state: { cart } });
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
