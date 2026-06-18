import MainLayout from "../layouts/MainLayout";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Website Development",
      desc: "Fast, responsive and SEO-friendly business websites."
    },
    {
      title: "Magazine Design",
      desc: "Birthday, anniversary and college magazines."
    },
    {
      title: "Sketch Portraits",
      desc: "Hyper realistic hand-drawn portraits from photos."
    }
  ];

  return (
    <MainLayout>
      <section className="services-page">
        <h1>My Services</h1>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              <button>Get Started</button>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}