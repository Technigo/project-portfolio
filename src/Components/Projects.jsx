import React, { useState, useEffect } from 'react';
import './Projects.css';
import projectsData from './projects.json';
import chatbotImage from '../assets/chatbot-image.jpg';
import weatherAppImage from '../assets/weather-app-image.jpg';
import guessWhoGameImage from '../assets/guess-who-game-image.jpg';
import yogaImage from '../assets/yoga.jpg';
import movieImage from '../assets/movie.jpg';
import musicImage from '../assets/music.jpg';
import thoughtsImage from '../assets/thoughts.jpg';
import fitnessImage from '../assets/fitness.jpg';
import githubIcon from '../assets/github.jpg'; 
import liveDemoIcon from '../assets/Live Demo.png'; 

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const updatedProjects = projectsData.projects.map(project => {
      switch (project.name) {
        case "Chatbot":
          return { ...project, image: chatbotImage };
        case "Weather app":
          return { ...project, image: weatherAppImage };
        case "Serenity Yoga":
          return { ...project, image: yogaImage };
        case "Guess Who, the game":
          return { ...project, image: guessWhoGameImage };
        case "Movies":
          return { ...project, image: movieImage };
        case "Music releases":
          return { ...project, image: musicImage };
        case "Happy Thoughts":
          return { ...project, image: thoughtsImage };
        case "Fitness survey":
          return { ...project, image: fitnessImage };
        default:
          return project; 
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


