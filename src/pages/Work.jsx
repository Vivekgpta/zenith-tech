import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "./Work.css";

export default function Work() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      category: "Websites",
      title: "Business Website",
      image: "https://picsum.photos/600/400?1",
    },
    {
      category: "Magazines",
      title: "College Magazine",
      image: "https://picsum.photos/600/400?2",
    },
    {
      category: "Sketches",
      title: "Portrait Sketch",
      image: "https://picsum.photos/600/400?3",
    },
    {
      category: "Websites",
      title: "School Website",
      image: "https://picsum.photos/600/400?4",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <MainLayout>
      <section className="work-page">
        <h1>My Work</h1>

        <div className="filter-buttons">
          {["All", "Websites", "Magazines", "Sketches"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={
                  filter === category ? "active" : ""
                }
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="work-grid">
          {filteredProjects.map((project, index) => (
            <div className="work-card" key={index}>
              <img
                src={project.image}
                alt={project.title}
              />

              <div className="work-overlay">
                <h3>{project.title}</h3>
                <button>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}