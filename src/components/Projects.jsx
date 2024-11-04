import React from 'react';
import './Projects.css';
import chatbotImage from '../assets/chatbot.png';
import weatherAppImage from '../assets/weather-app.png';
import businessSiteImage from '../assets/business.png';
import musicImage from '../assets/music.png';
import libraryImage from '../assets/library.png';
import thoughtsImage from '../assets/thoughts.png';
import surveyImage from '../assets/survey.png';

const Projects = ({ projects }) => {
  const imageMap = {
    '/assets/chatbot.png': chatbotImage,
    '/assets/weather-app.png': weatherAppImage,
    '/assets/business.png': businessSiteImage,
    '/assets/music.png': musicImage,
    '/assets/library.png': libraryImage,
    '/assets/thoughts.png': thoughtsImage,
    '/assets/survey.png': surveyImage,
  };

  return (
    <section className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={imageMap[project.image]} alt={project.name} className="project-image" />
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tech-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.netlify} target="_blank" rel="noopener noreferrer" className="live-demo">Live Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="view-code">View Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
