import "./Hero.css";
import { Link } from "react-router-dom";
import heroImage from "../../assets/img1.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-badge">Web Developer & Designer</span>

          <h1>
            I build
            <span> conversion-led</span>
            <div className="hero-website"> websites. </div>
          </h1>

          <p>
 I'm Vivek Kumar. I design and build digital experiences that turn attention into customers. 25+ websites shipped across 12+ industries. Strategy first. Pixels second. Conversion always.
          </p>

          <div className="hero-buttons">
            <Link to="/" className="primary-btn">
              View Work
            </Link>

            <Link to="/contact" className="secondary-btn">
              Hire Me
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImage} alt="Vivek Kumar" />
        </div>
      </div>
    </section>
  );
}
