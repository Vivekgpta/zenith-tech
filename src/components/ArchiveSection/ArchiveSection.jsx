// ArchiveSection.jsx

import "./ArchiveSection.css";
import { FaArrowUp } from "react-icons/fa";

export default function ArchiveSection() {
  return (
    <section className="archive">

      {/* Floating Shapes */}
      <span className="shape s1"></span>
      <span className="shape s2"></span>
      <span className="shape s3"></span>
      <span className="shape s4"></span>

      <div className="archive-content">

        <p className="archive-subtitle">
          AND 192 MORE
          <span className="robot"></span>
        </p>

        <h1 className="archive-title">
          Browse the full archive.
        </h1>

        <button className="archive-btn magnetic">
          <div className="btn-bg"></div>

          <div className="btn-content">
            <div>
              <h3>Browse 200+ projects</h3>
              <span>ALL WORK</span>
            </div>

            <div className="arrow">
              <FaArrowUp />
            </div>
          </div>
        </button>

      </div>
    </section>
  );
}