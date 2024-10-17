import React from "react";
import "../Styles/Cart.css"; // Import the CSS file for the Cart component

const Cart = () => {
  return (
    <div className="cart-container">
      <h1 className="cart-header">Shopping Cart</h1>
      <div className="cart-items-list" id="cart-items">
        {/* Cart items will be populated here */}
        <div className="cart-item">
          <span className="cart-item-name">Product 1</span>
          <span className="cart-item-price">$29.99</span>
        </div>
        <div className="cart-item">
          <span className="cart-item-name">Product 2</span>
          <span className="cart-item-price">$49.99</span>
        </div>
        <div className="cart-item">
          <span className="cart-item-name">Product 3</span>
          <span className="cart-item-price">$19.99</span>
        </div>
        <div className="cart-item">
          <span className="cart-item-name">Product 4</span>
          <span className="cart-item-price">$39.99</span>
        </div>
      </div>
      <div className="cart-total-container">
        <h2 className="cart-total-label">
          Total: <span id="total-price">$139.96</span>
        </h2>
      </div>
      <button className="checkout-button" id="checkout-button">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
