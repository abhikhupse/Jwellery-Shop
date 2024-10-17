import React, { useState } from "react";
import axios from "axios";
import "../Styles/LoginCard.css";

function RegisterCard({ isVisible, onClose, switchToLogin, onRegisterSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handle Registration
  const handleRegister = async (event) => {
    event.preventDefault();
    setMessage("");

    // Passwords validation
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // Check for empty fields
    if (!name || !email || !mobile || !password || !confirmPassword) {
      setMessage("All fields are required!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        { name, email, mobile, password, confirmPassword }
      );

      if (response.data.success) {
        setMessage("Registration successful! Please verify your OTP.");
        // Clear form fields
        setName("");
        setEmail("");
        setMobile("");
        setPassword("");
        setConfirmPassword("");

        // Switch to OTP verification card
        onRegisterSuccess();
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage(
        "Registration failed: " + (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div id="register-card" className={`card ${isVisible ? "show" : ""}`}>
      <div className="close-icon" onClick={onClose}>
        &times;
      </div>
      <div className="card-content">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label className="label" htmlFor="registerName">Name</label>
            <input
              name="registerName"
              id="registerName"
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label className="label" htmlFor="registerEmail">Email</label>
            <input
              name="registerEmail"
              id="registerEmail"
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label className="label" htmlFor="registerMobile">Mobile</label>
            <input
              name="registerMobile"
              id="registerMobile"
              className="input"
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label className="label" htmlFor="registerPassword">Password</label>
            <input
              name="registerPassword"
              id="registerPassword"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label className="label" htmlFor="registerConfirmPassword">Confirm Password</label>
            <input
              name="registerConfirmPassword"
              id="registerConfirmPassword"
              className="input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button className="button" type="submit">Sign up</button>
        </form>

        {message && <p className="message">{message}</p>}

        <div className="login-link">
          Already have an account?{" "}
          <span className="login-button" onClick={switchToLogin}>Log in</span>
        </div>
      </div>
    </div>
  );
}

export default RegisterCard;
