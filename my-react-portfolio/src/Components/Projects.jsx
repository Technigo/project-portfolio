import React, { useState, useEffect } from 'react';
import './Projects.css';
import projectsData from './projects.json';
import chatbotImage from '../assets/chatbot-image.jpg';
import weatherAppImage from '../assets/weather-app-image.jpg';
import githubIcon from '../assets/github.jpg'; 
import liveDemoIcon from '../assets/Live Demo.jpg'; 

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Manually assign images to projects based on the project name
    const updatedProjects = projectsData.projects.map(project => {
      switch (project.name) {
        case "Chatbot":
          return { ...project, image: chatbotImage };
        case "Weather app":
          return { ...project, image: weatherAppImage };
        default:
          return project; // If no image is matched, the original project data is returned
      }
    });

    setProjects(updatedProjects);
  }, []);

  return (
    <div className="projects-container">
      <h1>Featured Projects</h1>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <div className="image-container">
            {/* Display the image from the project data */}
            <img src={project.image} alt={project.name} />
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
                  <button className="icon-button live-demo-button">
                    <img className="icon" src={liveDemoIcon} alt="live demo icon" />
                    Live demo
                  </button>
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <button className="icon-button view-code-button">
                    <img className="icon" src={githubIcon} alt="github icon" />
                    View the code
                  </button>
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


