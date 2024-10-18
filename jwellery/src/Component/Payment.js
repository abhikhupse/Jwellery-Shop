import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate
import "../Styles/Payment.css"; // Import your CSS file for styling

const Payment = () => {
  const location = useLocation(); // Get the location object
  const navigate = useNavigate(); // Hook to programmatically navigate
  const { cart, address } = location.state || {}; // Retrieve cart items and address from state
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [message, setMessage] = useState("");

  // Calculate the total price
  const totalPrice = cart
    ? cart.reduce((total, item) => total + item.price, 0).toFixed(2)
    : 0;

  const handlePayment = (e) => {
    e.preventDefault(); // Prevent page refresh
    // Here, you would typically process the payment via API
    setMessage("Payment processed successfully!");

    // Navigate to the Order Success page with order details
    const orderDetails = {
      cart,
      totalPrice,
      address,
    };

    navigate("/order-success", { state: orderDetails }); // Pass order details as state
  };

  return (
    <div className="payment-container">
      <h1 className="payment-header">Payment</h1>

      {/* Display the total amount */}
      <div className="payment-total">
        <h2>Total Amount: ₹{totalPrice}</h2>
      </div>

      <form className="payment-form" onSubmit={handlePayment}>
        <div className="form-group">
          <label htmlFor="nameOnCard">Name on Card:</label>
          <input
            type="text"
            id="nameOnCard"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="pay-button">
          Pay Now
        </button>
      </form>
      {message && <div className="payment-message">{message}</div>}
    </div>
  );
};

export default Payment;
