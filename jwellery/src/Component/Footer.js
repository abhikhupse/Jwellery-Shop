import React from "react";
import "../Styles/Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">Jewellery Shop</div>
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Menu</h3>
          <ul className="footer-links">
            <li>
              <a href="#">New In</a>
            </li>
            <li>
              <a href="#">Ring</a>
            </li>
            <li>
              <a href="#">Necklace</a>
            </li>
            <li>
              <a href="#">Earrings</a>
            </li>
            <li>
              <a href="#">Gift</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">About</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Who We Are</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Social</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">X</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Made by Abhishek and Liza.
      </div>
    </footer>
  );
};

export default Footer;
