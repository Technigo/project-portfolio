import React from 'react';
import './Projects.css';
import chatbotImage from '../assets/chatbot-image.jpg';
import weatherAppImage from '../assets/weather-app-image.jpg';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Featured Projects</h1>
      <div className="project">
        <img src={chatbotImage} alt="Chatbot" />
        <h2>Chatbot built in javascript</h2>
        <p>The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.</p>
        <div className="tech-tags">
          <span>HTML5</span> <span>CSS3</span> <span>React</span> <span>Node</span>
        </div>
        <div className="project-actions">
          <button>Live demo</button>
          <button>View the code</button>
        </div>
      </div>
      <div className="project">
        <img src={weatherAppImage} alt="Weather app" />
        <h2>Weather app</h2>
        <p>The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.</p>
        <div className="tech-tags">
          <span>HTML5</span> <span>CSS3</span> <span>React</span> <span>Node</span>
        </div>
        <div className="project-actions">
          <button>Live demo</button>
          <button>View the code</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
