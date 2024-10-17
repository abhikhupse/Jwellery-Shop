import React from "react";
import "../Styles/JwellerySection.css"; // Import the CSS file

const JewelrySection = () => {
  return (
    <div className="container3">
      <div className="section">
        <img
          src={require("../CatagoriesImages/shopping (3).webp")}
          alt="Engagement Ring"
        />
        <div className="overlay"></div>
        <div className="content">
          <h2>Unveil the Essence of Exploration Through Exquisite Jewelry</h2>
          <a href="#">Discover our Popular Jewelry</a>
        </div>
      </div>
      <div className="section">
        <img
          src={require("../CatagoriesImages/shopping (3).webp")}
          alt="Engagement Ring"
        />
        <div className="overlay"></div>
        <div className="content">
          <h2>Revel in Love's Splendor with Timeless Elegance</h2>
          <a href="#">Discover our Wedding Jewelry</a>
        </div>
      </div>
    </div>
  );
};

export default JewelrySection;
