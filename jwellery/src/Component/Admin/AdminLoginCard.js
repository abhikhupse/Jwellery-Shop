import React, { useState } from "react";
import axios from "axios";
import "./adminlogin.css";

function AdminLoginCard({ isVisible, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          email,
          password,
        }
      );

      if (response.data.success) {
        setMessage("Admin login successful!");
        onLoginSuccess(); // Call parent function for admin login success
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error details:", error); // Log the full error object
      setMessage(
        "Admin login failed: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div id="admin-login-card" className={`card ${isVisible ? "show" : ""}`}>
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
      </div>
    </div>
  );
}

export default AdminLoginCard;
