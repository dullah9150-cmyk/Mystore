import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          A2Z Bazaar
        </Link>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✖" : "☰"} 
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/location" onClick={closeMenu}>Location</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
