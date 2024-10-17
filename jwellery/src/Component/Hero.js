// src/components/Hero.jsx
import React from "react";
import "../Styles/Hero.css"; // Import the CSS file for styling

const Hero = () => {
  return (
    <div className="hero">
      <div className="text">
        <h1>
          It's all About
          <br />
          New Year
        </h1>
        <p>
          Discover your iconic style. Ethically sourced, consciously crafted.
        </p>
        <div className="buttons">
          <button className="button">Shop Now</button>
          <button className="button">About Us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
