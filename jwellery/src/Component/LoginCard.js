import React, { useState } from "react";
import axios from "axios";
import "../Styles/LoginCard.css";

function LoginCard({ isVisible, onClose, switchToRegister, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handle Login Function
  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        }
      );

      if (response.data.success) {
        setMessage("Login successful!");
        onLoginSuccess(); // Call the parent function
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage(
        "Login failed: " + (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div id="login-card" className={`card ${isVisible ? "show" : ""}`}>
      <div className="close-icon" onClick={onClose}>
        &times;
      </div>
      <div className="card-content">
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label className="label" htmlFor="Email">
              Email address
            </label>
            <input
              name="Email"
              id="Email"
              className="input"
              type="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="label" htmlFor="Password">
              Password
            </label>
            <input
              name="Password"
              id="Password"
              className="input"
              type="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="button" type="submit">
            Login
          </button>
        </form>
        {message && <p className="message">{message}</p>}
        <div className="register-link">
          Don't have an account?
          <span className="register-button" onClick={switchToRegister}>
            Register
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
