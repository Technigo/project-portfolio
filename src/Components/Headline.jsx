import React from 'react';
import linneaImage from '../assets/Linnea.jpg';
import arrowImage from '../assets/icons8-arrow-down-100.png';
import './Headline.css';

const Headline = () => {
  return (
    <div className="headline">
      <h1>Hi, I'm Linnea Johansson</h1>
      <h2>Frontend Developer</h2>
      <div className="profile-container">
        <div className="profile-content"> 
          <img src={linneaImage} alt="Linnea Johansson" className="profile-image" />
          <p className="profile-description">
          With a background in customer service, I've always enjoyed solving problems and making connections. Now, I'm channeling that passion into a new career as a Frontend Developer. Embracing the tech world's dynamic nature, I find joy in coding and bringing ideas to life.
          </p>
        </div>
        <img src={arrowImage} alt="Arrow" className="arrow-image" />
      </div>
    </div>
  );
};

export default Headline;


















