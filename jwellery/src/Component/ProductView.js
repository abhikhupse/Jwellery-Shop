// src/components/ProductView.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/ProductView.css"; // Import the CSS styles separately

const ProductView = () => {
  const navigate = useNavigate();

  // Function to handle Add to Cart button click
  const handleAddToCart = () => {
    navigate("/cart"); // Redirect to the Cart page
  };

  return (
    <div className="product-container">
      {/* Product View Section */}
      <section className="product-details-section">
        <div className="product-image-wrapp">
          <img
            src="https://via.placeholder.com/600x600"
            alt="Product Image"
            className="product-image"
          />
        </div>
        <div className="product-info">
          <h1 className="product-title">Elegant Gold Ring</h1>
          <p className="product-price">$250.00</p>
          <p className="product-description">
            This exquisite gold ring is handcrafted with meticulous attention to
            detail, making it a timeless piece that complements any outfit. With
            its elegant design and superior craftsmanship, it's perfect for
            special occasions or everyday wear.
          </p>
          <ul className="product-specifications">
            <li>
              <strong>Material:</strong> 18K Gold
            </li>
            <li>
              <strong>Weight:</strong> 3.5 grams
            </li>
            <li>
              <strong>Gemstone:</strong> Diamond
            </li>
            <li>
              <strong>Size:</strong> Available in multiple sizes
            </li>
          </ul>
          <div className="product-actions">
            <button className="buy-now-button" onClick={handleAddToCart}>
              Buy Now
            </button>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductView;
