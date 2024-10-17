import React from "react";
import "../Styles/FeaturesSection.css"; // Import the CSS file

const FeaturesSection = () => {
  return (
    <div className="container4">
      <div className="section">
        <div className="icon">📦</div>
        <h3>Safe Return Process</h3>
        <p>Secure and hassle-free return process.</p>
      </div>
      <div className="section">
        <div className="icon">🚚</div>
        <h3>Fast Delivery</h3>
        <p>Receive your order faster than ever before!</p>
      </div>
      <div className="section">
        <div className="icon">💎</div>
        <h3>Quality Products</h3>
        <p>Presented in elegant jewelry, perfect for gifts.</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
