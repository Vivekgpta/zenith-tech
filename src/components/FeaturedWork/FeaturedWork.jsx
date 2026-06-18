import "./FeaturedWork.css";
import AnimatedSection from "../AnimatedSection/AnimatedSection";


export default function FeaturedWork() {
  const projects = [
    {
      title: "Business Website",
      desc: "Modern responsive website for local businesses.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      title: "Magazine Design",
      desc: "Creative and premium magazine layouts.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    },
    {
      title: "Sketch Portrait",
      desc: "Hyper realistic hand-drawn portraits.",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f"
    }
  ];

  return (

    <AnimatedSection>
    <section className="featured">
      <h2 className="section-title">Featured Work</h2>

      <div className="featured-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
            />

            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <button>View Project</button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </AnimatedSection>
  );
}