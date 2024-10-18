const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Route to add a new product
router.post("/", addProduct);

// Route to get all products
router.get("/", getProducts);

// Route to get a product by ID
router.get("/:id", getProductById);

// Route to update a product by ID
router.put("/:id", updateProduct);

// Route to delete a product by ID
router.delete("/:id", deleteProduct);

module.exports = router;
