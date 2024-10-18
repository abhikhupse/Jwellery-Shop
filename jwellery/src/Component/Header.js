// src/Component/Header.js
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaSnowflake,
  FaFire,
  FaRing,
  FaPaw,
  FaCircle,
  FaGift,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaEllipsisV,
} from "react-icons/fa";
import "../Styles/Header.css"; // Ensure you have the correct path for your CSS

const Header = ({
  isLoggedIn,
  onLoginClick,
  handleLogout,
  onAdminLoginClick,
}) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showAdminMenu, setShowAdminMenu] = useState(false); // State for admin menu

  const toggleProfileMenu = () => {
    setShowProfileMenu((prev) => !prev);
  };

  const toggleAdminMenu = () => {
    setShowAdminMenu((prev) => !prev);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">Jewellery</div>

        <nav>
          <ul>
            <li>
              <a href="#">New In</a>
              <ul className="dropdown">
                <li>
                  <Link to="/new-arrivals">
                    <FaStar /> New Arrivals
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <FaSnowflake /> Seasonal Picks
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaFire /> Trending Now
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Ring</a>
              <ul className="dropdown">
                <li>
                  <Link to="/gold-ring">
                    <FaRing /> Gold Rings
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <FaRing /> Silver Rings
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaRing /> Custom Rings
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Necklace</a>
              <ul className="dropdown">
                <li>
                  <a href="#">
                    <FaPaw /> Gold Necklaces
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaPaw /> Silver Necklaces
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaPaw /> Gemstone Necklaces
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Earrings</a>
              <ul className="dropdown">
                <li>
                  <a href="#">
                    <FaCircle /> Hoop Earrings
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaCircle /> Stud Earrings
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaCircle /> Drop Earrings
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Gift</a>
              <ul className="dropdown">
                <li>
                  <a href="#">
                    <FaGift /> For Him
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGift /> For Her
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGift /> Special Occasions
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <ScrollLink
                to="about-section"
                smooth={true}
                duration={800}
                offset={-50}
                spy={true}
                className="scroll-link"
              >
                About
              </ScrollLink>
            </li>
          </ul>
        </nav>

        <div className="login-area">
          {isLoggedIn ? (
            <div className="profile-menu">
              <FaUser className="profile-icon" onClick={toggleProfileMenu} />
              {showProfileMenu && (
                <ul className="profile-dropdown">
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <button className="logout-button" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <button className="login-button" onClick={onLoginClick}>
              Login
            </button>
          )}

          <div className="icons">
            <a href="#" aria-label="Search">
              <FaSearch />
            </a>
            <Link to="/cart" aria-label="Cart">
              <FaShoppingCart />
            </Link>
            <FaEllipsisV
              className="menu-icon"
              onClick={toggleAdminMenu}
              aria-label="Menu"
            />
            {showAdminMenu && (
              <ul className="admin-dropdown">
                <li onClick={onAdminLoginClick}>Admin Login</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
