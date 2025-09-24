import "./About.css";

export default function About() {
  return (
    <section className="about container">
      <h2>About Us</h2>
      <p>
        At A@Z Bazaar, we bring the best of local and international goods to your
        fingertips. Our mission is to provide affordable, high-quality products
        with a touch of personal service.
      </p>
      <div className="about-cards">
        <div className="card">
          <h3>Quality</h3>
          <p>We carefully select every item to ensure only the best for you.</p>
        </div>
        <div className="card">
          <h3>Affordability</h3>
          <p>Great deals without compromising on quality.</p>
        </div>
        <div className="card">
          <h3>Trust</h3>
          <p>Your satisfaction is our number one priority.</p>
        </div>
      </div>
    </section>
  );
}
