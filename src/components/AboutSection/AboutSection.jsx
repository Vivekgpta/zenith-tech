import "./AboutSection.css";
import {
  FaArrowRight,
  FaCircle,
} from "react-icons/fa";

import profile from "../../assets/profile.jpg"; // Replace with your image

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">

        {/* Top Label */}
        <div className="section-tag">
          <span className="line"></span>
          <span className="number">03</span>
          <span className="dot">·</span>
          <span className="text">ABOUT</span>
        </div>

        <div className="about-grid">

          {/* LEFT */}

          <div className="about-image">

            <img src={profile} alt="profile" />

            {/* Floating Decorations */}

            <div className="floating-star">✦</div>

            <div className="floating-bot">
              🤖
            </div>

            {/* Bottom Card */}

            <div className="image-footer">

              <div className="status">

                <FaCircle className="green-dot" />

                <span>WORKING GLOBALLY</span>

              </div>

              <div className="year">

                <span>2022</span>

                <FaArrowRight />

                <span>NOW</span>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="about-content">

            <h1>
              Four years.
              <span> Two hundred </span>
              websites.
              <br />
              One playbook.
            </h1>

            <p>
              I've been designing and building websites since 2022.
              Started by self-teaching React for my own affiliate
              venture, then turned that into a freelance practice.
              Cold-calling local businesses. Designing e-commerce
              stores. Building a reputation city by city.
            </p>

            <p>
              Today I'm a one-person studio working with founders in
               India. I've shipped
              <strong> 25+ websites </strong>
              across 12+ industries: premium D2C, SaaS landing pages,
              industrial B2B, artisan F&B, premium jewellery and
              EdTech.
            </p>

            <p>
              My edge isn't code. It's sales-trained taste plus
              AI-powered speed. I sell every project I build. I pick
              every colour, every line break and every animation.
              AI does the heavy lifting so we ship in weeks, not
              quarters.
            </p>

            <a href="/" className="story-link">
              Read the full story
              <FaArrowRight />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}