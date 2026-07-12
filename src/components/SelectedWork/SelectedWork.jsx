import "./SelectedWork.css";
import projectImg from "../../assets/img1.jpg"; // Replace with your image
import projectImg2 from "../../assets/projects/velora.png";
import projectImg3 from "../../assets/projects/premkiframe.png";
import projectImg1 from "../../assets/projects/vkclean.png";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWork() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sw-image", {
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".sw-project",
          start: "top 75%",
        },
      });

      gsap.from(".sw-content", {
        x: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".sw-project",
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  gsap.to(".sw-image img", {
    yPercent: -15,
    ease: "none",
    scrollTrigger: {
      trigger: ".sw-image",
      scrub: true,
    },
  });

  return (
    <>
      <section ref={sectionRef} className="selected-work">
        <div className="sw-top">
          <div className="sw-left">
            <span className="sw-number">02</span>
            <span className="sw-line"></span>
            <span className="sw-small-title">SELECTED WORK</span>

            <h2>
              Recent <span>design</span> work.
            </h2>
          </div>

          <div className="sw-right">
            <p>
              Seven featured. Out of 200+ shipped across 8 years. Click any to
              read the full case study.
            </p>
          </div>
        </div>

        <div className="sw-project">
          <div className="sw-image">
            <img src={projectImg1} alt="Project" />

            <div className="sw-bottom-bar">
              <div className="tech">● WORDPRESS + WOOCOMMERCE</div>

              <div className="year">2026</div>
            </div>
          </div>

          <div className="sw-content">
            <div className="project-count">01</div>

            <p className="category">RESTAURANT / F&B</p>

            <h3>Vk Clean Bhopal</h3>
            <h4>"Together we clean, Together we change."</h4>

            <p className="desc">
              Modern NGO website for VK Clean Bhopal with campaign highlights,
              volunteer onboarding, donation integration, and impact stories —
              designed to build trust and encourage community involvement.
            </p>

            <span className="badge">ARTISAN CREAMERY</span>

            <div className="buttons">
              <a href="#">Read Case Study ↗</a>

              <a href="https://vkcleanbhopal.netlify.app/" target="_blank">
                Visit Live
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="selected-work reverse">
        <div className="sw-project">
          {/* Image Left */}
          <div className="sw-image">
            <img src={projectImg2} alt="Project" />

            <div className="sw-bottom-bar">
              <div className="tech">● WORDPRESS + WOOCOMMERCE</div>
              <div className="year">2026</div>
            </div>
          </div>

          {/* Content Right */}
          <div className="sw-content">
            <div className="project-count">02</div>

            <p className="category">RESTAURANT / F&B</p>

            <h3>Velora</h3>

            <h4>"Cafe & Restaurant"</h4>

            <p className="desc">
              Brand-led website for An ultra-premium rooftop sanctuary where
              culinary craft meets cinematic ambience — under a canopy of a
              thousand lights.
            </p>

            <span className="badge">ARTISAN CREAMERY</span>

            <div className="buttons">
              <a href="#">Read Case Study ↗</a>
              <a href="https://the-velora.netlify.app/" target="_blank">
                Visit Live
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="selected-work">
        <div className="sw-project">
          <div className="sw-image">
            <img src={projectImg3} alt="Project" />

            <div className="sw-bottom-bar">
              <div className="tech">● WORDPRESS + WOOCOMMERCE</div>

              <div className="year">2026</div>
            </div>
          </div>

          <div className="sw-content">
            <div className="project-count">03</div>

            <p className="category">RESTAURANT / F&B</p>

            <h3>Prem ki Photography</h3>

            <h4>"Prem Raj | Travel Photographer | Content Creator"</h4>

            <p className="desc">
              Personal branding website for travel photographer and content
              creator Prem Raj. Featuring cinematic travel stories, photography
              portfolio, award highlights, and collaboration
              opportunities—crafted to build credibility and attract brand
              partnerships.
            </p>

            <span className="badge">ARTISAN CREAMERY</span>

            <div className="buttons">
              <a href="#">Read Case Study ↗</a>

              <a
                href="https://gilded-perspectives.lovable.app/"
                target="_blank"
              >
                Visit Live
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="selected-work reverse">
        <div className="sw-project">
          {/* Image Left */}
          <div className="sw-image">
            <img src={projectImg} alt="Project" />

            <div className="sw-bottom-bar">
              <div className="tech">● WORDPRESS + WOOCOMMERCE</div>
              <div className="year">2026</div>
            </div>
          </div>

          {/* Content Right */}
          <div className="sw-content">
            <div className="project-count">04</div>

            <p className="category">RESTAURANT / F&B</p>

            <h3>Chai & Crumbles</h3>

            <h4>"Where Every Bite Meets Brilliance"</h4>

            <p className="desc">
             Chai & Crumbles is Bhopal's cozy café destination for handcrafted chai, freshly baked crumbles, and café-style snacks. Whether you're catching up with friends or looking for a quiet corner to unwind, we serve every cup with warmth. Visit us for seasonal specials, signature chai blends, and desserts baked fresh daily. 
            </p>

            <span className="badge">ARTISAN CREAMERY</span>

            <div className="buttons">
              <a href="#">Read Case Study ↗</a>
              <a href="https://vapor-vistas-venue.lovable.app/" target="_blank">
                Visit Live
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
