import React, { useEffect, useState } from "react";
import "./DeleteProduct.css"; // Add your CSS styles

const DeleteProduct = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [message, setMessage] = useState(""); // State for delete messages

  // Fetch all products from the database
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

  // Delete product by _id
  const handleDelete = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${productId}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        setMessage("Product deleted successfully!");
        setProducts(products.filter((product) => product._id !== productId)); // Use _id field
        setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="delete-product-container">
      <h1 className="delete-product-title">Delete Products</h1>

      {message && <div className="notification-message">{message}</div>}

      <section className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product._id}>
              <div className="image-container">
                <img src={product.image} alt={`${product.title} Image`} />
              </div>

              <div className="details-container">
                <h2 className="product-name">{product.title}</h2>
                <p className="product-cost">₹{product.price}</p>

                <button
                  className="remove-button"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available!</p>
        )}
      </section>
    </div>
  );
};

export default DeleteProduct;
