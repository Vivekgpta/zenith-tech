import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        Vivek Kumar
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/services" onClick={() => setMenuOpen(false)}>
          Services
        </NavLink>

        <NavLink to="/work" onClick={() => setMenuOpen(false)}>
          Work
        </NavLink>

        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          About
        </NavLink>

        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}