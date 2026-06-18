import "./Hero.css";
import { Link } from "react-router-dom";



export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">
          Freelance Creative Developer & Artist
        </span>

        <h1>
          Hi, I'm <span>Vivek Kumar</span>
        </h1>

        <p>
          I build modern websites and create personalized artistic
          experiences that help businesses and individuals stand out.
        </p>

        <div className="hero-buttons">
          <button  className="primary-btn">
           <Link to="/services">View My Work</Link> 
          </button>

          <button className="secondary-btn">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}