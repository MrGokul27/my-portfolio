import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="navbar bebasneue py-4">
      <div className="container-fluid">
        <div className="logo">WELCOME !</div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-menu-icon"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="#about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="#projects">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="#contact">CONTACT ME</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
