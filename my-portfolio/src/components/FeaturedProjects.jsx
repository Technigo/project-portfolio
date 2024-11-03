import React, { useEffect, useState } from "react";
import ProjectInfoCard from "./ProjectInfoCard";
import "./FeaturedProjects.css";
import ArrowIcon from "../assets/ArrowIcon.svg";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState(4); // Start by displaying 4 projects
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
        setError(error.message);
      });
  }, []);

  // Load more projects when the button is clicked
  const loadMoreProjects = () => {
    setDisplayedProjects((prev) => prev + 2); // Load 2 more projects at a time
  };

  if (error) {
    return <div>Error loading projects: {error}</div>;
  }

  return (
    <section className="featured-projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.slice(0, displayedProjects).map((project, index) => (
          <div key={project.name || index} className="project-wrapper">
            <ProjectInfoCard project={project} />
          </div>
        ))}
      </div>
      {displayedProjects < projects.length && ( // Show the button only if there are more projects to load
        <button onClick={loadMoreProjects} className="load-more-button">
          <img src={ArrowIcon} alt="Arrow see more icon" className="button-icon" /> See more projects
        </button>
      )}
    </section>
  );
};

export default FeaturedProjects;
