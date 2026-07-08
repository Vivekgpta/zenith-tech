import "./ServicesSection.css";
import { FaArrowRight } from "react-icons/fa";

const packages = [
  {
    id: "01",
    days: "7 DAYS",
    title: "Launch",
    subtitle: "ONE PAGE · SHIPPED FAST",
    description:
      "One-page landing site. Conversion-focused. Shipped in a week.",
    features: [
      "Strategy + Wireframe",
      "Custom-coded, no templates",
      "Mobile-first, SEO-ready",
      "30-day support",
    ],
    button: "Reserve launch",
    active: false,
  },
  {
    id: "02",
    days: "14 DAYS",
    title: "Growth",
    subtitle: "FULL WEBSITE · BUILT FOR TRAFFIC",
    description:
      "Full website · up to 7 pages. Built for traffic and trust.",
    features: [
      "Everything in Launch",
      "Multi-page architecture",
      "Blog + Lead Capture",
      "On-page SEO across all pages",
    ],
    button: "Reserve growth",
    active: true,
  },
  {
    id: "03",
    days: "21 DAYS",
    title: "Scale",
    subtitle: "E-COMMERCE · BUILT TO SELL",
    description:
      "Full e-commerce. Built to sell. Shopify or WooCommerce.",
    features: [
      "Everything in Growth",
      "Up to 50 Products",
      "Payment + Shipping Setup",
      "SEO + AEO + Speed Pass",
    ],
    button: "Reserve scale",
    active: false,
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* Heading */}

        <div className="services-top">

          <div className="section-tag">
            <span className="line"></span>
            <span>08</span>
            <span>•</span>
            <span>SERVICES</span>
          </div>

          <div className="heading-wrapper">

            <h2>
              Three packages.
              <span> Fixed </span>
              price.
            </h2>

            <p>
              No three-meeting quotes. No agency theater.
              Pick a tier, get shipped.
            </p>

          </div>

        </div>

        {/* Cards */}

        <div className="pricing-grid">

          {packages.map((item) => (
            <div
              key={item.id}
              className={`service-card ${
                item.active ? "active" : ""
              }`}
            >
              <div className="card-top">

                <div className="card-number">
                  <span>{item.id}</span>

                  <div className="mini-line"></div>

                  <span>{item.days}</span>
                </div>

                {item.active && (
                  <div className="purple-star">
                    ✦
                  </div>
                )}

              </div>

              <h3>{item.title}</h3>

              <span className="service-subtitle">
                {item.subtitle}
              </span>

              <p className="service-description">
                {item.description}
              </p>

              <ul>

                {item.features.map((feature, index) => (
                  <li key={index}>
                    {feature}
                  </li>
                ))}

              </ul>

              <button className="service-btn">
                {item.button}
                <FaArrowRight />
              </button>

            </div>
          ))}

        </div>

        {/* Footer */}

        <div className="services-footer">

          <p>
            Need something custom?
            <a href="/"> Let's talk.</a>
          </p>

          <span>
            QUOTE WITHIN 24 HOURS · MONEY-BACK AT
            DESIGN PHASE
          </span>

        </div>

      </div>
    </section>
  );
}