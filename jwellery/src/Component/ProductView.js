// ProductCard.js
import React from "react";
import "../Styles/ProductView.css"; // Import CSS for styling

const ProductView = ({ product }) => {
  const { name, price, details, image } = product;

  const handleBuyNow = () => {
    alert(`Buying ${name}!`);
    // Add logic for buying the product here
  };

  const handleAddToCart = () => {
    alert(`${name} added to cart!`);
    // Add logic for adding to cart here
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price}</p>
      <p className="product-details">{details}</p>
      <div className="product-buttons">
        <button className="buy-now" onClick={handleBuyNow}>
          Buy Now
        </button>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductView;
