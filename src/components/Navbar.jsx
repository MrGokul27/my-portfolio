import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
      });
    }
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
    <nav className="navbar bradleyHand px-lg-5 px-3 py-4">
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
        <ul className={`nav-links ${isMobileMenuOpen ? "mobile-active" : "mt-md-0 mt-3"}`}>
          <li>
            <a href="#home" onClick={(e) => handleScrollToSection(e, "home")}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleScrollToSection(e, "about")}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleScrollToSection(e, "skills")}>
              SKILLS
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleScrollToSection(e, "projects")}>
              PROJECTS
            </a>
          </li>
          <li>
            <a href="/tools">
              My Tools
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
