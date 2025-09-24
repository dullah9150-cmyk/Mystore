import "./Location.css";

export default function Location() {
  return (
    <section className="location container">
      <h2>Our Location</h2>
      <p>Visit us in person at our store or contact us for directions.</p>

      <div className="location-details">
        <div className="address-card">
          <strong>A@Z Bazaar</strong>
          <address>
            Near Police Check Post<br />
            @Melakarugulam, Tirunelveli
          </address>
        </div>
        <div className="contact-card">
          <strong>Contact</strong>
          <p>Phone: +91 801 501 7600</p>
          <p>Email: feelingzbird@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
