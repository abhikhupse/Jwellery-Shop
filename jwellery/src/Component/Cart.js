import React from "react";
import { useCart } from "./CartContext"; // Import the Cart Context
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "../Styles/Cart.css"; // Import the CSS file for the Cart component

const Cart = () => {
  const { cart } = useCart(); // Access cart items from context
  const navigate = useNavigate(); // Initialize the navigate function

  // Calculate the total price
  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  const handleCheckout = () => {
    // Redirect to the Address page and pass cart items as state
    navigate("/address", { state: { cart } });
  };

  return (
    <div className="cart-container">
      <h1 className="cart-header">Shopping Cart</h1>
      <div className="cart-items-list" id="cart-items">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span className="cart-item-name">{item.title}</span>
              <span className="cart-item-price">₹{item.price}</span>
            </div>
          ))
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>
      <div className="cart-total-container">
        <h2 className="cart-total-label">
          Total: <span id="total-price">₹{totalPrice}</span>
        </h2>
      </div>
      <button
        className="checkout-button"
        id="checkout-button"
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
