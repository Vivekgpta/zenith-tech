import "./WhyChooseMe.css";

export default function WhyChooseMe() {
  const features = [
    {
      title: "Modern Design",
      desc: "Beautiful, responsive and premium UI."
    },
    {
      title: "Fast Delivery",
      desc: "Projects completed on time with quality."
    },
    {
      title: "Client Focused",
      desc: "Every project is tailored to client needs."
    }
  ];

  return (
    <section className="why">
      <h2>Why Choose Me?</h2>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}