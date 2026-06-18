import "./Stats.css";
import AnimatedSection from "../AnimatedSection/AnimatedSection";

export default function Stats() {
  const stats = [
    {
      number: 20,
      suffix: "+",
      title: "Local Business Websites",
    },
    {
      number: 30,
      suffix: "+",
      title: "Magazine Designs",
    },
    {
      number: 120,
      suffix: "+",
      title: "Sketch Portraits",
    },
  ];

  return (
    <AnimatedSection>
    <section className="stats">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>
              {item.number}
              {item.suffix}
              
            </h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
    </AnimatedSection>
  );
}
