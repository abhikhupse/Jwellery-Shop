import React, { useState } from "react";
import axios from "axios";
import "../Styles/LoginCard.css";

function OtpVerificationCard({ isVisible, onClose, onVerifySuccess }) {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Send OTP to the user's email
  const sendOtp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/send-otp",
        { email }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        "Failed to send OTP: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  // Handle OTP verification
  const handleVerify = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/verify-otp",
        { email, otp }
      );

      if (response.data.success) {
        setMessage("OTP verified successfully!");
        onVerifySuccess(); // Call parent function on success
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage(
        "Verification failed: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div
      id="otp-verification-card"
      className={`card ${isVisible ? "show" : ""}`}
    >
      <div className="close-icon" onClick={onClose}>
        &times;
      </div>
      <div className="card-content">
        <h2>Enter OTP</h2>
        <form onSubmit={handleVerify}>
          <div className="input-group">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              id="email"
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button className="button" type="button" onClick={sendOtp}>
            Send OTP
          </button>

          <div className="input-group">
            <label className="label" htmlFor="Otp">
              OTP
            </label>
            <input
              name="Otp"
              id="Otp"
              className="input"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>

          <button className="button" type="submit">
            Verify OTP
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default OtpVerificationCard;
