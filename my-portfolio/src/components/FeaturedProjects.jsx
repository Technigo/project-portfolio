// src/components/FeaturedProjects.jsx
import React, { useEffect, useState } from "react";
import ProjectInfoCard from "./ProjectInfoCard";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Adjust the path if projects.json is located elsewhere
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects data.");
        }
        return response.json();
      })
      .then((data) => setProjects(data.projects)) // data.projects assumes the JSON structure you provided
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section className="featured-projects">
      <h2>Featured Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectInfoCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
