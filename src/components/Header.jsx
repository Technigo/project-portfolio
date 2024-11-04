import React from 'react';
import './Header.css';
import chatbotImage from '../assets/chatbot.png';
import weatherAppImage from '../assets/weather-app.png';
import businessSiteImage from '../assets/business.png';

const projectsData = {
  projects: [
    {
      name: 'Chatbot',
      image: chatbotImage
    },
    {
      name: 'Weather app',
      image: weatherAppImage
    },
    {
      name: 'Business Site',
      image: businessSiteImage
    }
  ]
};

const Header = () => {
  const firstThreeProjects = projectsData.projects.slice(0, 3);

  return (
    <header className="header">
      <h1>Hi there, I’m <span className="highlight">Sara Svensson</span></h1>
      <p className="tagline">Creative Frontend Developer with a Background in Architecture & Teaching</p>
      <div className="image-gallery">
        {firstThreeProjects.map((project, index) => (
          <img key={index} src={project.image} alt={project.name} />
        ))}
      </div>
      <section className="bio-section">
        <h2>Bio</h2>
        <p>Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.</p>
      </section>
    </header>
  );
};

export default Header;