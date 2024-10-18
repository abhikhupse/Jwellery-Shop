import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProductForm.css"; // Your styling file

const AddProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [material, setMaterial] = useState("");
  const [weight, setWeight] = useState("");
  const [gemstone, setGemstone] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [error, setError] = useState(null); // Track errors
  const [loading, setLoading] = useState(false); // Track loading state

  const navigate = useNavigate();

  // Handle file input and image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission and send data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    const newProduct = {
      title,
      price: parseFloat(price),
      description,
      material,
      weight,
      gemstone,
      size,
      image: imagePreview, // Send image as base64 or URL string
    };

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        const savedProduct = await response.json();
        console.log("Product added:", savedProduct);
        navigate("/new-arrivals"); // Redirect to new arrivals page
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to add product");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred while adding the product");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="add-product-form-container">
      <h2>Add New Product</h2>
      {error && <p className="error-message">{error}</p>} {/* Display errors */}
      {loading && <p>Loading...</p>} {/* Display loading state */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Product Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
          </div>
        )}

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
