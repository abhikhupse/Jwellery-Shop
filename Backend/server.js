const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const addressRoutes = require("./routes/addressRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Create a MongoDB session store
const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "sessions",
});

// Initialize the Express application
const app = express();

// Middleware for JSON parsing with increased payload limit and CORS
app.use(express.json({ limit: "10mb" })); // Allow payloads up to 10MB
app.use(express.urlencoded({ limit: "10mb", extended: true })); // Handle URL-encoded data

app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from React frontend
    credentials: true, // Allow sending cookies and headers
  })
);

// Session middleware configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || "mysecretkey",
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // Session timeout of 1 day
      secure: false, // Set to true if using HTTPS
      httpOnly: true,
    },
  })
);

// Routes
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes); // Changed to "/api/products" for better structure
app.use("/api/cart", cartRoutes);
app.use("/api/address", addressRoutes);
app.use(paymentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging
  res.status(err.status || 500).json({ message: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
