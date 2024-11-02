import React from 'react';
import './Projects.css';

const Projects = ({ title, description, technologies, liveLink, codeLink, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-tags">
          {technologies.map((tech, index) => <span key={index} className="tech-tag">{tech}</span>)}
        </div>
        <div className="project-links">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="live-demo">Live Demo</a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="view-code">View Code</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
