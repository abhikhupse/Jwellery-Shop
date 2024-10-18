const Product = require("../models/productModel");

// Add a new product
const addProduct = async (req, res) => {
  try {
    const {
      title,
      price,
      description,
      material,
      weight,
      gemstone,
      size,
      image,
    } = req.body;

    const newProduct = new Product({
      title,
      price,
      description,
      material,
      weight,
      gemstone,
      size,
      image,
    });

    await newProduct.save();
    console.log(`[INFO] Product added: ${newProduct.title}`);

    res
      .status(201)
      .json({ message: "Product added successfully!", product: newProduct });
  } catch (error) {
    console.error(`[ERROR] Failed to add product: ${error.message}`);
    res.status(500).json({ message: "Failed to add product." });
  }
};

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.status(200).json(products);
  } catch (error) {
    console.error(`[ERROR] Failed to fetch products: ${error.message}`);
    res.status(500).json({ message: "Failed to fetch products." });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      console.warn(`[WARN] Product not found: ${id}`);
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(`[ERROR] Failed to fetch product: ${error.message}`);
    res.status(500).json({ message: "Failed to fetch product." });
  }
};

// Update a product by ID
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const product = await Product.findByIdAndUpdate(id, updates, { new: true });

    if (!product) {
      console.warn(`[WARN] Product not found: ${id}`);
      return res.status(404).json({ message: "Product not found." });
    }

    console.log(`[INFO] Product updated: ${id}`);
    res.status(200).json({ message: "Product updated successfully!", product });
  } catch (error) {
    console.error(`[ERROR] Failed to update product: ${error.message}`);
    res.status(500).json({ message: "Failed to update product." });
  }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      console.warn(`[WARN] Product not found: ${id}`);
      return res.status(404).json({ message: "Product not found." });
    }

    console.log(`[INFO] Product deleted: ${id}`);
    res.status(200).json({ message: "Product deleted successfully!" });
  } catch (error) {
    console.error(`[ERROR] Failed to delete product: ${error.message}`);
    res.status(500).json({ message: "Failed to delete product." });
  }
};

module.exports = {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
