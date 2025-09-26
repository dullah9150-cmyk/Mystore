import { Link } from "react-router-dom";
import "./Home.css";
import image from "../../src/assets/AA.jpg";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Welcome to A@Z Bazaar</h1>
        <p>
          Shop smarter with us — discover daily essentials, unique products,
          and local favorites all in one place.
        </p>
        <div className="hero-resume">
          <a href={image} target="_blank" rel="noopener noreferrer">
            View My Notice
          </a>
        </div>
      </div>

    </section>
  );
}
