// BestSellers.js
import React from "react";
import "../Styles/BestSellers.css";
import { Link } from "react-router-dom";

const BestSellers = () => {
  return (
    <div className="content-wrapper">
      <div className="header">
        <h2>Best Sellers</h2>
        <Link to="/products" className="view-all">
          View All Products
        </Link>
      </div>
      <section className="best-sellers">
        <div className="product-slider">
          <button className="prev-btn" aria-label="Previous">
            ❮
          </button>
          <div className="product-list">
            {/* Update each product Link to point to the ProductPage */}
            <Link to="/products/phoenixedition" className="product">
              <img
                src={require("../CatagoriesImages/shopping (3).webp")}
                alt="Phoenix Wedding"
              />
              <h3>Phoenix Wedding</h3>
              <p>₹5000.00</p>
            </Link>
            <Link to="/products/princessdiamond" className="product">
              <img
                src={require("../CatagoriesImages/shopping (3).webp")}
                alt="Princess Diamond"
              />
              <h3>Princess Diamond</h3>
              <p>₹6000.00</p>
            </Link>
            <Link to="/products/goldbracelet" className="product">
              <img
                src={require("../CatagoriesImages/shopping (3).webp")}
                alt="Gold Bracelet"
              />
              <h3>Gold Bracelet</h3>
              <p>₹4000.00</p>
            </Link>
            <Link to="/products/fancyring" className="product">
              <img
                src={require("../CatagoriesImages/shopping (3).webp")}
                alt="Fancy Ring"
              />
              <h3>Fancy Ring</h3>
              <p>₹2000.00</p>
            </Link>
            <Link to="/products/flatgoldring" className="product">
              <img
                src={require("../CatagoriesImages/shopping (3).webp")}
                alt="Flat Gold Ring Set"
              />
              <h3>Flat Gold Ring Set</h3>
              <p>₹4000.00</p>
            </Link>
          </div>
          <button className="next-btn" aria-label="Next">
            ❯
          </button>
          <div className="slider-indicators">
            <div className="indicator active"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestSellers;
