import React from "react";
import "../Styles/CategorySection.css";

// Component for the category section
const CategorySection = () => {
  return (
    <div className="category-section">
      <h2 className="catagory_head">Categories</h2>

      <div className="container2">
        <div className="category">
          <div className="overlay"></div>
          <h2 className="catagory_name">Cluster Rings</h2>
          <img
            className="catagory_img"
            src={require("../CatagoriesImages/pr2j0_1200.jpg")}
            alt="Cluster Ring"
          />
        </div>
        <div className="category">
          <div className="overlay"></div>
          <h2 className="catagory_name">Bands</h2>
          <img
            className="catagory_img"
            src={require("../CatagoriesImages/shopping (1).webp")}
            alt="Band"
          />
        </div>
        <div className="category">
          <div className="overlay"></div>
          <h2 className="catagory_name">Engagement Rings</h2>
          <img
            className="catagory_img"
            src={require("../CatagoriesImages/shopping (3).webp")}
            alt="Engagement Ring"
          />
        </div>
        <div className="category">
          <div className="overlay"></div>
          <h2 className="catagory_name">Necklaces</h2>
          <img
            className="catagory_img"
            src={require("../CatagoriesImages/shopping.webp")}
            alt="Necklace"
          />
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
