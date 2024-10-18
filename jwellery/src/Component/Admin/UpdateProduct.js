import React, { useEffect, useState } from "react";
import "./UpdateProduct.css";

const UpdateProduct = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "", // Store base64 image here
  });
  const [imagePreview, setImagePreview] = useState("");

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
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${editProduct._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        fetchProducts();
        setEditProduct(null);
        console.log("Product updated successfully!");
      } else {
        console.error("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const openEditForm = (product) => {
    setEditProduct(product);
    setFormData({
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
    });
    setImagePreview(product.image);
  };

  return (
    <main className="update-product-page">
      <h1 className="update-header">Update Your Products</h1>
      <section className="product-list-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product._id}>
              <div className="product-image-container">
                <img src={product.image} alt={`${product.title} Image`} />
              </div>
              <div className="product-details">
                <h2>{product.title}</h2>
                <p className="price">₹{product.price}</p>
                <button
                  className="edit-button"
                  onClick={() => openEditForm(product)}
                >
                  Edit Product
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available!</p>
        )}
      </section>

      {editProduct && (
        <div className="edit-form-overlay">
          <div className="edit-form-container">
            <h2>Edit Product</h2>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
              />

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />

              <div className="form-buttons">
                <button type="submit" className="save-button">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setEditProduct(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default UpdateProduct;
