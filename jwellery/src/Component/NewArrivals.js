import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext"; // Adjust the path as necessary
import "../Styles/ProductList.css";

const NewArrivals = () => {
  const { addToCart } = useCart(); // Access the addToCart function
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState(""); // State for the added to cart message

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
    setMessage(`${product.title} has been added to cart!`); // Set message
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <main>
      <h1 className="new-arrivals-header">New Arrivals</h1>
      {message && <div className="cart-message">{message}</div>}{" "}
      {/* Show message */}
      <section className="productListContainer">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="productCard" key={product.id}>
              <div className="productImageContainer">
                <img src={product.image} alt={`${product.title} Image`} />
              </div>
              <div className="productDetailsContainer">
                <h2 className="productTitle">{product.title}</h2>
                <p className="productPrice">₹{product.price}</p>
                <button
                  className="addToCartButton"
                  onClick={() => handleAddToCart(product)} // Add to cart functionality
                >
                  Add to Cart
                </button>
                <button
                  className="buyNowButton"
                  onClick={() => handleAddToCart(product)} // Buy now functionality (add to cart for simplicity)
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No new arrivals yet!</p>
        )}
      </section>
    </main>
  );
};

export default NewArrivals;
