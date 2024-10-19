import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext"; // Import Cart context to manage cart
import "../Styles/ProductList.css"; // Import your existing CSS

const NewArrivals = () => {
  const { addToCart } = useCart(); // Access addToCart from CartContext
  const [products, setProducts] = useState([]); // State to store products
  const [message, setMessage] = useState(""); // State to show cart messages

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data); // Set fetched products in state
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when component mounts
  }, []);

  // Fetch the logged-in user data (user's _id) from localStorage
  const getUserId = () => {
    const user = JSON.parse(localStorage.getItem("user")); // Assuming user data is stored in localStorage
    return user ? user._id : null; // Return user's _id or null if not found
  };

  // Handle adding product to cart and sending it to the backend
  const handleAddToCart = async (product) => {
    try {
      addToCart(product); // Add to cart in frontend context

      // Send product data to backend with the product's ObjectId
      const response = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "12345", // Replace with the actual user ID
          productId: product._id, // Use product's ObjectId from MongoDB
          productTitle: product.title,
          productPrice: product.price,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`${product.title} has been added to cart!`); // Success message
        console.log(data.message); // Optional log for debugging
      } else {
        console.error("Failed to add product to cart");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }

    // Clear the success message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <main>
      <h1 className="new-arrivals-header">New Arrivals</h1>

      {/* Display the cart message */}
      {message && <div className="cart-message">{message}</div>}

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
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="buyNowButton"
                  onClick={() => handleAddToCart(product)}
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
