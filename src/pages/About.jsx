import MainLayout from "../layouts/MainLayout";
import "./About.css";

export default function About() {
  return (
    <MainLayout>
      <section className="about-page">
        {/* Header */}
        <div className="about-header">
          <h1>About Me</h1>
          <p>
            Passionate Freelancer, Creative Developer, Designer &
            Artist from India.
          </p>
        </div>

        {/* Profile Section */}
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43"
              alt="Vivek Kumar"
            />
          </div>

          <div className="about-text">
            <h2>Hi, I'm Vivek Kumar</h2>

            <p>
              I’m a 21-year-old passionate freelancer from India
              with a strong growth mindset. I specialize in
              building modern websites and creating artistic
              experiences.
            </p>

            <p>
              I enjoy working with clients and turning ideas into
              reality through creativity, technology and design.
            </p>
          </div>
        </div>

        {/* Skills */}
        <section className="skills-section">
          <h2>My Skills</h2>

          <div className="skills-grid">
            <div className="skill-card">React</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">HTML</div>
            <div className="skill-card">CSS</div>
            <div className="skill-card">UI Design</div>
            <div className="skill-card">Sketch Art</div>
          </div>
        </section>

        {/* Experience */}
        <section className="experience-section">
          <div className="experience-card">
            <h2>20+</h2>
            <p>Business Websites</p>
          </div>

          <div className="experience-card">
            <h2>30+</h2>
            <p>Magazine Designs</p>
          </div>

          <div className="experience-card">
            <h2>120+</h2>
            <p>Sketch Portraits</p>
          </div>
        </section>

        {/* Journey */}
        <section className="journey-section">
          <h2>My Journey</h2>

          <div className="timeline">
            <div className="timeline-item">
              <h3>Started Learning Design</h3>
              <p>
                Began exploring sketching, creativity and digital
                design.
              </p>
            </div>

            <div className="timeline-item">
              <h3>Freelance Projects</h3>
              <p>
                Worked with local businesses and clients on
                websites and creative projects.
              </p>
            </div>

            <div className="timeline-item">
              <h3>Creative Developer</h3>
              <p>
                Combining development and artistic skills to
                deliver premium experiences.
              </p>
            </div>
          </div>
        </section>
      </section>
    </MainLayout>
  );
}