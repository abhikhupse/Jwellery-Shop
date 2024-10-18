// src/Component/Admin/AdminHeader.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaClipboardList, FaTrash, FaListUl } from "react-icons/fa";
import "./AdminHeader.css";

const AdminHeader = ({ onLogout }) => {
  const [showManageProductMenu, setShowManageProductMenu] = useState(false);
  const [showOrdersMenu, setShowOrdersMenu] = useState(false);

  const toggleManageProductMenu = () => {
    setShowManageProductMenu((prev) => !prev);
  };

  const toggleOrdersMenu = () => {
    setShowOrdersMenu((prev) => !prev);
  };

  return (
    <header className="admin-header">
      <div className="container">
        <div className="logo">Admin Panel</div>
        <nav>
          <ul>
            <li>
              <Link to="/add-product">
                <FaPlus /> Add Product
              </Link>
            </li>
            <li>
              <div onClick={toggleManageProductMenu}>
                <FaClipboardList /> Manage Product
              </div>
              {showManageProductMenu && (
                <ul className="dropdown">
                  <li>
                    <Link to="/update-product/1">
                      <FaListUl /> Update Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/delete-product">
                      <FaTrash /> Delete Product
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div onClick={toggleOrdersMenu}>
                <FaClipboardList /> Orders Management
              </div>
              {showOrdersMenu && (
                <ul className="dropdown">
                  <li>
                    <Link to="/total-orders">
                      <FaListUl /> Total Orders
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button className="logout-button" onClick={onLogout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
