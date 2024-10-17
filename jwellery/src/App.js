import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import HomePage from "./Component/HomePage";
import ProductList from "./Component/ProductList";
import LoginCard from "./Component/LoginCard";
import RegisterCard from "./Component/RegisterCard";
import OtpVerificationCard from "./Component/OtpVerificationCard";
import NewArrivals from "./Component/NewArrivals";
import ProductView from "./Component/ProductView";
import Cart from "./Component/Cart";
import Footer from "./Component/Footer";
import "./index.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showOtpCard, setShowOtpCard] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(sessionStorage.getItem("user")) || false
  );

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowOtpCard(false);
  };

  const switchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
    setShowOtpCard(false);
  };

  const handleRegisterSuccess = () => {
    setShowRegister(false);
    setShowOtpCard(true); // Show OTP card after registration
  };

  const handleOtpVerifySuccess = () => {
    setShowOtpCard(false);
    setShowLogin(true); // Show login card after OTP verification
  };

  const handleClose = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowOtpCard(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    sessionStorage.setItem("user", "true");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Header
          isLoggedIn={isLoggedIn}
          onLoginClick={handleLoginClick}
          handleLogout={handleLogout}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/products/phoenixedition" element={<ProductView />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <LoginCard
          isVisible={showLogin}
          onClose={handleClose}
          switchToRegister={switchToRegister}
          onLoginSuccess={handleLoginSuccess}
        />
        <RegisterCard
          isVisible={showRegister}
          onClose={handleClose}
          switchToLogin={handleLoginClick}
          onRegisterSuccess={handleRegisterSuccess} // Trigger OTP card visibility
        />
        <OtpVerificationCard
          isVisible={showOtpCard}
          onClose={handleClose}
          onVerifySuccess={handleOtpVerifySuccess} // Show login card on OTP verification success
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
