import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} A@Z Bazaar. All rights reserved.</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/location">Location</a>
        </div>
      </div>
    </footer>
  );
}
