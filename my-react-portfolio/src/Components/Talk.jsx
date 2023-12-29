import React from 'react';
import './Talk.css';
import linneaImage from '../assets/Linnea.jpg';
import linkedinIcon from '../assets/linkedin.png'; 
import githubIcon from '../assets/github.png';

const Talk = () => {
  return (
    <div className="talk-container">
      <h2>Let's talk</h2>
      <img src={linneaImage} alt="Linnea Johansson" className="profile-image" />
      <h3>Linnea Johansson</h3>
      <h3>+46 (0) 76 208 42 20</h3>
      <h3>linneajoh@gmail.com</h3>
      <div className="social-links">
        <a href="https://github.com/JohanssonLinnea" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/linnea-johansson-68886828a/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Talk;

