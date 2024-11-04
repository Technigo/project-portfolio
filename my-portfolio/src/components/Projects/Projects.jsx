import React, { useState } from 'react';
import './Projects.css';
import projectsData from '../../../../projects.json'; 
import arrowDown from '../../assets/ArrowDown.svg';
import webIcon from '../../assets/web.svg';
import githubIcon from '../../assets/github2.svg';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  return (
    <section className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="project-container">
        {projectsData.projects.slice(0, visibleProjects).map((project, index) => (
          <div className="project-card" key={index}>
            <img 
              src={project.image} 
              alt={`${project.name} Thumbnail`} 
              className="project-image" 
            />
            <div className="project-info">
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-buttons">
                <a href={project.netlify} className="project-btn live-demo" target="_blank" rel="noopener noreferrer">
                  <img src={webIcon} alt="Live demo icon" className="icon" /> Live demo
                </a>
                <a href={project.github} className="project-btn view-code" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub icon" className="icon" /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < projectsData.projects.length && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          <img src={arrowDown} alt="Arrow Down" className="arrow-icon" /> See more projects
        </button>
      )}
    </section>
  );
};

export default Projects;
