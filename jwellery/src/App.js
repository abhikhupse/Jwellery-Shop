// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Component/Header";
import AdminHeader from "./Component/Admin/AdminHeader";
import HomePage from "./Component/HomePage";
import ProductList from "./Component/ProductList";
import NewArrivals from "./Component/NewArrivals";
import AddProductForm from "./Component/Admin/AddProductForm";
import UpdateProduct from "./Component/Admin/UpdateProduct";
import DeleteProduct from "./Component/Admin/DeleteProduct"; // Import DeleteProduct
import LoginCard from "./Component/LoginCard";
import RegisterCard from "./Component/RegisterCard";
import OtpVerificationCard from "./Component/OtpVerificationCard";
import AdminLoginCard from "./Component/Admin/AdminLoginCard";
import Footer from "./Component/Footer";
import Cart from "./Component/Cart";
import Address from "./Component/Address";
import Payment from "./Component/Payment";
import OrderSuccess from "./Component/OrderSuccess";
import TotalOrders from "./Component/Admin/TotalOrders";
import "./index.css"; // Import global CSS

function App() {
  const [products, setProducts] = useState([
    /* Sample Products */
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(sessionStorage.getItem("user")) || false
  );
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showOtpCard, setShowOtpCard] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setIsLoggedIn(false);
    setIsAdminLoggedIn(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    sessionStorage.setItem("user", "true");
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    setShowAdminLogin(false);
  };

  const renderRoutes = () => {
    if (isAdminLoggedIn) {
      return (
        <>
          <Route path="/admin" element={<Navigate to="/total-orders" />} />{" "}
          {/* Redirect to Total Orders */}
          <Route path="/total-orders" element={<TotalOrders />} />
          <Route
            path="/add-product"
            element={<AddProductForm addProduct={addProduct} />}
          />
          <Route
            path="/update-product/:productId"
            element={
              <UpdateProduct
                products={products}
                onUpdateProduct={updateProduct}
              />
            }
          />
          <Route path="/delete-product" element={<DeleteProduct />} />
        </>
      );
    }

    return (
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList products={products} />} />
        <Route
          path="/new-arrivals"
          element={<NewArrivals products={products} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </>
    );
  };

  return (
    <Router>
      <div className="App">
        {isAdminLoggedIn ? (
          <AdminHeader onLogout={handleLogout} />
        ) : (
          <Header
            isLoggedIn={isLoggedIn}
            onLoginClick={() => setShowLogin(true)}
            onAdminLoginClick={() => setShowAdminLogin(true)}
          />
        )}

        <Routes>{renderRoutes()}</Routes>

        <LoginCard
          isVisible={showLogin}
          onClose={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
        <RegisterCard
          isVisible={showRegister}
          onClose={() => setShowRegister(false)}
          onRegisterSuccess={() => setShowOtpCard(true)}
        />
        <OtpVerificationCard
          isVisible={showOtpCard}
          onClose={() => setShowOtpCard(false)}
        />
        <AdminLoginCard
          isVisible={showAdminLogin}
          onClose={() => setShowAdminLogin(false)}
          onLoginSuccess={handleAdminLoginSuccess}
        />

        {!isAdminLoggedIn && <Footer />}
      </div>
    </Router>
  );
}

export default App;
