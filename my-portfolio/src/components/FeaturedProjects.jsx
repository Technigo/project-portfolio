import React, { useEffect, useState } from "react";
import ProjectInfoCard from "./ProjectInfoCard";
import "./FeaturedProjects.css";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects data");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.projects) {
          setProjects(data.projects);
        } else {
          throw new Error("Invalid data format");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error loading projects: {error}</div>;
  }

  return (
    <section className="featured-projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.name || index} className="project-wrapper">
            <ProjectInfoCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;