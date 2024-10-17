import React from "react";
import "../Styles/AboutUs.css"; // Include CSS file for styles

const AboutUs = () => {
  return (
    <section id="about-section" className="story">
      {" "}
      {/* Add id for scroll link */}
      <h2>Our Story</h2>
      <div className="story-content">
        <div className="story-text">
          <p>
            Welcome to our Jewelry Shop! Founded in 2004, we have been creating
            exquisite, handcrafted jewelry for over two decades.
          </p>
          <p>
            With a passion for elegance and beauty, we aim to create unique
            pieces that are timeless and one-of-a-kind. Each piece is crafted
            with meticulous attention to detail, using only the highest quality
            materials.
          </p>
          <p>
            Our shop values precision, sophistication, and customer
            satisfaction, ensuring that every piece tells a story of elegance
            and art. Whether you’re looking for a statement piece or a
            sentimental keepsake, we’re here to offer the finest selection.
          </p>
        </div>
        <div className="story-image">
          <img
            src={require("../CatagoriesImages/shopping (3).webp")}
            alt="Jewelry Crafting"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
