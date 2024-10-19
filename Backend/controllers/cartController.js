const Cart = require("../models/Cart");

// Add Product to Cart
exports.addToCart = async (req, res) => {
  const { userId, productId, productTitle, productPrice } = req.body;

  try {
    // Check if the product is already in the user's cart
    let cartItem = await Cart.findOne({ userId, productId });

    if (cartItem) {
      // If the product exists, increase the quantity
      cartItem.quantity += 1;
      await cartItem.save();
    } else {
      // If the product is not in the cart, create a new cart item
      cartItem = new Cart({
        userId,
        productId,
        productTitle,
        productPrice,
        quantity: 1,
      });
      await cartItem.save();
    }

    res.status(200).json({ message: "Product added to cart!", cartItem });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).json({ error: "Failed to add product to cart" });
  }
};

// Get User's Cart
exports.getUserCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cartItems = await Cart.find({ userId }).populate("productId");
    res.status(200).json(cartItems);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ error: "Failed to fetch cart" });
  }
};
