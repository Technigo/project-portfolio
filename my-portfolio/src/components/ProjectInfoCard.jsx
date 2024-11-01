// src/components/ProjectInfoCard.jsx
import React from "react";
import "./ProjectInfoCard.css";

const ProjectInfoCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={`${project.name} screenshot`} className="project-image" />
      <h3>{project.name}</h3>
      <div className="project-tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="project-tag">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.netlify} target="_blank" rel="noopener noreferrer">View on Netlify</a>
        <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </div>
  );
};

export default ProjectInfoCard;
