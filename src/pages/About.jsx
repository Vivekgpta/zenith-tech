import MainLayout from "../layouts/MainLayout";
import "./About.css";
import aboutImage from "../assets/profile.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


export default function About() {
  return (
    <MainLayout>
      <section className="about-page">

        {/* HERO */}
        <div className="about-hero">

          <span>ABOUT ME</span>

          <h1>
            Web Developer & Designer
          </h1>

          <p>
            <p>
              Building modern digital experiences and high-performance
              websites that help businesses grow and stand out online.
            </p>
          </p>

        </div>

        {/* PROFILE */}

        <div className="about-content">

          <div className="about-image">

            <img
              src={aboutImage}
              alt="Vivek Kumar"
            />

          </div>

          <div className="about-text">

            <h2>
              Hi, I'm Vivek Kumar 👋
            </h2>

            <p>
              <p>
                I'm a passionate freelance web developer from India,
                specializing in modern, responsive websites and
                custom digital solutions for businesses and individuals.
              </p>
            </p>

            <p>
              <p>
                My goal is to transform ideas into powerful digital
                solutions that help businesses grow and create a
                lasting online presence.
              </p>
            </p>

            <div className="about-tags">

              <span>Creative Thinker</span>

              <span>Problem Solver</span>

              <span>Growth Mindset</span>

            </div>

          </div>

        </div>

        {/* EXPERIENCE */}

        <section className="experience-section">

          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="experience-card">
                <h2>30+</h2>
                <p>Business Websites Developed</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="experience-card">
                <h2>15+</h2>
                <p>Landing Pages Designed</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="experience-card">
                <h2>40+</h2>
                <p>Advance web solutions</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="experience-card">
                <h2>20+</h2>
                <p>Technologies Used</p>
              </div>
            </SwiperSlide>

          </Swiper>

        </section>

        {/* SKILLS */}

        <section className="skills-section">

          <h2>Skills & Technologies</h2>

          <div className="skills-grid">

            <div className="skill-card">React</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">HTML5</div>
            <div className="skill-card">CSS3</div>
            <div className="skill-card">Tailwind CSS</div>
            <div className="skill-card">Git & GitHub</div>
            <div className="skill-card">UI/UX Design</div>
            <div className="skill-card">Magazine Design</div>
            <div className="skill-card">Sketch Art</div>

          </div>

        </section>

        {/* EXPERTISE */}

        <section className="expertise">

          <h2>What I Do Best</h2>

          <div className="expertise-grid">

            <div className="expertise-card">

              <h3>Website Development</h3>

              <p>
                Building modern, responsive and high-performance
                websites tailored to business and personal needs.
              </p>

            </div>

            <div className="expertise-card">

              <h3>Frontend Development</h3>

              <p>
                Creating clean, interactive and user-friendly
                interfaces using modern web technologies.
              </p>

            </div>

            <div className="expertise-card">

              <h3>Backend Integration</h3>

              <p>
                Developing secure backend solutions and database
                integrations for seamless website functionality.
              </p>

            </div>

          </div>

        </section>

        {/* JOURNEY */}

        <section className="journey-section">

          <h2>My Journey</h2>

          <div className="timeline">

            <div className="timeline-item">

              <span>2020</span>

              <h3>Started Sketching</h3>

              <p>
                Developed artistic skills and started
                creating portrait artworks.
              </p>

            </div>

            <div className="timeline-item">

              <span>2022</span>

              <h3>Learning Web Development</h3>

              <p>
                Started building websites and learning
                modern frontend technologies.
              </p>

            </div>

            <div className="timeline-item">

              <span>2024</span>

              <h3>Freelance Projects</h3>

              <p>
                Worked with businesses and individuals
                on websites and creative projects.
              </p>

            </div>

            <div className="timeline-item">

              <span>2025+</span>

              <h3>Creative Developer</h3>

              <p>
                Combining development and design to
                deliver premium experiences.
              </p>

            </div>

          </div>

        </section>



        {/* CTA */}

        <section className="about-cta">

          <h2>
            Let's Create Something Amazing Together
          </h2>

          <p>
            Have a project in mind? Let's discuss your
            vision and bring it to life.
          </p>

          <a
            href="https://wa.me/919142457610"
            target="_blank"
            rel="noreferrer"
          >
            Start a Conversation
          </a>

        </section>

      </section>
    </MainLayout>
  );
}