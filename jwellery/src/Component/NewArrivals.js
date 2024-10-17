import React from "react";
import "../Styles/ProductList.css"; // Importing external CSS file if needed
import productImage from "../CatagoriesImages/pr2j0_1200.jpg";

const ProductList = () => {
  const products = [
    {
      title: "Diamond Ring",
      price: 250,
      image: productImage,
    },
    {
      title: "Gold Necklace",
      price: 350,
      image: productImage,
    },
    {
      title: "Smartphone",
      price: 650,
      image: productImage,
    },
    {
      title: "Smartphone",
      price: 650,
      image: productImage,
    },
  ];

  return (
    <main>
      <section className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image-container">
              <img src={product.image} alt="Product Image" />
            </div>
            <div className="product-details-wrapper">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">₹{product.price}</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ProductList;
