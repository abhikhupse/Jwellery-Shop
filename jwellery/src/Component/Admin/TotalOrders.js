// src/Component/Admin/TotalOrders.js
import React, { useEffect, useState } from "react";
import "./TotalOrders.css"; // CSS for styling the orders page

const TotalOrders = () => {
  const [orders, setOrders] = useState([]); // State to store orders
  const [totalOrders, setTotalOrders] = useState(0); // Total order count

  // Fetch all orders from the database
  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/orders");
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
        setTotalOrders(data.length); // Set total number of orders
      } else {
        console.error("Failed to fetch orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Fetch orders on component mount
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="orders-container">
      <h1 className="orders-title">Total Orders</h1>
      <h2 className="orders-summary">Total Orders: {totalOrders}</h2>

      <section className="order-list">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div className="order-card" key={order._id}>
              <h3>Order ID: {order._id}</h3>
              <p>
                <strong>Customer:</strong> {order.customerName}
              </p>
              <p>
                <strong>Address:</strong> {order.address}
              </p>
              <p>
                <strong>Items:</strong> {order.items.join(", ")}
              </p>
              <p>
                <strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}
              </p>
              <p>
                <strong>Status:</strong> {order.status}
              </p>
            </div>
          ))
        ) : (
          <p>No orders available.</p>
        )}
      </section>
    </div>
  );
};

export default TotalOrders;
