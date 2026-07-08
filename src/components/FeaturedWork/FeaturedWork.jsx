import "./FeaturedWork.css";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { href, Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function FeaturedWork() {
  const projects = [
    {
      title: "Bites & Brilliance",
      desc: "Experience handcrafted coffee, gourmet bites, and unforgettable moments — in the heart of Bagmugaliya, Bhopal.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      href: "https://vapor-vistas-venue.lovable.app/",
    },
    {
      title: "VELORA",
      desc: "An ultra-premium rooftop sanctuary where culinary craft meets cinematic ambience — under a canopy of a thousand lights.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      href: "https://velora-gold-luxe.lovable.app/",
    },
    {
      title: "VK CLEAN BHOPAL",
      desc: "Join our mission to inspire communities, reduce pollution, spread environmental awareness, and create a cleaner, greener India.",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
      href: "https://vkcleanbhopal.netlify.app/",
    },
  ];

  return (
    <AnimatedSection>
      <section className="featured">
        <div className="section-header">
          <h2 className="section-title">Featured Work</h2>

          <p>Selected projects crafted with creativity and precision.</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-card">
                <img src={project.image} alt={project.title} />

                <div className="overlay">
                  <h3>{project.title}</h3>

                  <p>{project.desc}</p>
                  <a href={project.href}>
                    <button>View Project</button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="explore-btn-wrap">
          <Link to="/work" className="explore-btn">
            Explore More Projects →
          </Link>
        </div>
      </section>
    </AnimatedSection>
  );
}
