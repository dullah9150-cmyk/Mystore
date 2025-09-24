import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Welcome to A@Z Bazaar</h1>
        <p>
          Shop smarter with us — discover daily essentials, unique products,
          and local favorites all in one place.
        </p>
        <Link to="/about" className="btn">
          Learn More
        </Link>
      </div>

    </section>
  );
}
