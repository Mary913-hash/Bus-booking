import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom"; // Use RouterLink for routing
import { Link as ScrollLink } from "react-scroll"; // Use ScrollLink for smooth scrolling
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">
          <RouterLink to="/">Bus Booking</RouterLink>
        </h1>
        <ul className="nav-links">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>

          {/* Scroll to sections instead of routing to new pages */}
          <li>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="booking" smooth={true} duration={500}>
              Booking
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="availableBuses" smooth={true} duration={500}>
              Available Buses
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="availableRoutes" smooth={true} duration={500}>
              Available Routes
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>

          {/* Dashboard Dropdown */}
          <li className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Dashboard ▾
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <RouterLink to="/admin">Admin</RouterLink>
                </li>
                <li>
                  <RouterLink to="/driver">Driver</RouterLink>
                </li>
              </ul>
            )}
          </li>

          {/* Keep Router Links for Login & Register */}
          <li>
            <RouterLink to="/login" className="btn login-btn">
              Login
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/register" className="btn register-btn">
              Register
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
