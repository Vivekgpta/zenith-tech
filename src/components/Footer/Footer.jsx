import { Link } from "react-router-dom";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Vivek Kumar</h2>

          <p>
            Freelance Creative Developer & Artist. Creating modern websites,
            magazine designs, and hyper-realistic sketch portraits.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Connect</h3>
          <a href="#">
            <FaInstagram /> Instagram
          </a>
          <a href="#">
            <FaLinkedin />
            LinkedIn
          </a>
          <a href="#">
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Vivek Kumar. All Rights Reserved.
      </div>
    </footer>
  );
}
