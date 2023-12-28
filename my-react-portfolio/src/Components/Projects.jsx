import React, { useState, useEffect } from 'react';
import './Projects.css';
import projectsData from './projects.json'; 

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData.projects);
  }, []);

  // Helper function to require images dynamically
  const getImage = imageName => {
    try {
      return require(`../assets/${imageName}`);
    } catch (err) {
      console.error(err);
      return ''; // Return a fallback image or empty string if the require fails
    }
  };

  return (
    <div className="projects-container">
      <h1>Featured Projects</h1>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <div className="image-container">
            {/* Use the getImage function to dynamically load images */}
            <img src={getImage(project.image)} alt={project.name} />
          </div>
          <div className="project-content">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex}>{tag}</span>
              ))}
            </div>
            <div className="project-actions">
              {project.netlify && (
                <a href={project.netlify} target="_blank" rel="noopener noreferrer">
                  <button>Live demo</button>
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <button>View the code</button>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

