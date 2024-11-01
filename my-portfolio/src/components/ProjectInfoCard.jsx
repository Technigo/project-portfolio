import React from "react";
import "./ProjectInfoCard.css";

// Import your image
import ImageGrey from "../assets/ImageGrey.jpeg";

const ProjectInfoCard = ({ project }) => {
  const handleDemoClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener noreferrer");
    }
  };

  const handleCodeClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div className="project-card">
      <img 
        src={ImageGrey}  // Use the imported image here
        alt={`${project.name} screenshot`} 
        className="project-image" 
      />
      <div className="project-info">
        <h3>{project.name}</h3>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          <button 
            className="demo-button"
            onClick={() => handleDemoClick(project.netlify)}
          >
            Live Demo
          </button>
          <button 
            className="code-button"
            onClick={() => handleCodeClick(project.github)}
          >
            View Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoCard;
