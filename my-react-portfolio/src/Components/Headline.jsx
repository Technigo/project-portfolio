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
            Linnea is an exceptional developer known for her innovative solutions and
            exceptional coding abilities. She creates user-friendly applications and solves
            complex issues with ease. Her drive for excellence makes her a valuable asset
            to any project and a standout in the technology field.
          </p>
        </div>
        <img src={arrowImage} alt="Arrow" className="arrow-image" />
      </div>
    </div>
  );
};

export default Headline;


















