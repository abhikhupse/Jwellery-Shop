import React from "react";
import { useLocation } from "react-router-dom";
import "../Styles/OrderSuccess.css"; // Updated CSS import

const OrderSuccess = () => {
  const location = useLocation();
  const { cart, address = {}, totalPrice } = location.state || {};

  return (
    <div className="order-complete">
      <h1 className="order-complete-header">Order Successful!</h1>
      <h2 className="order-complete-subtitle">Your Order Details:</h2>

      <div className="order-info">
        <h3 className="order-info-title">Products Ordered:</h3>
        <ul className="order-product-list">
          {cart.map((item, index) => (
            <li key={index} className="order-product-item">
              {item.title} - ₹{item.price}
            </li>
          ))}
        </ul>
        <h3 className="order-total">Total Amount: ₹{totalPrice}</h3>
      </div>

      <div className="shipping-info">
        <h3 className="shipping-info-title">Your Shipping Address:</h3>
        <p className="shipping-info-detail">{address.name || "N/A"}</p>
        <p className="shipping-info-detail">{address.street || "N/A"}</p>
        <p className="shipping-info-detail">
          {address.city || "N/A"}, {address.state || "N/A"}{" "}
          {address.zip || "N/A"}
        </p>
      </div>

      <button
        onClick={() => window.location.reload()}
        className="back-home-btn"
      >
        Back to Home
      </button>
    </div>
  );
};

export default OrderSuccess;
