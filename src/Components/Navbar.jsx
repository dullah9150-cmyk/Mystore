import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo">A2Z Bazaar</Link>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✖" : "☰"} {/* Show X when open, hamburger when closed */}
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/location" onClick={() => setOpen(false)}>Location</Link></li>
        </ul>
      </div>
    </nav>
  );
}
