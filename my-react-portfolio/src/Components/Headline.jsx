import React from 'react';
import linneaImage from '../assets/Linnea.jpg';
import './Headline.css';

const Headline = () => {
  return (
    <div className="headline">
      <div className="header-and-profile">
        <div className="header-section">
          <h1>Hi, I'm Linnea Johansson</h1>
          <h2>Frontend Developer</h2>
        </div>
        <div className="profile-section">
          <img src={linneaImage} alt="Linnea Johansson" className="profile-image" />
          <p className="profile-description">
            Linnea is an exceptional developer known for her innovative solutions and
            exceptional coding abilities. She creates user-friendly applications and solves
            complex issues with ease. Her drive for excellence makes her a valuable asset
            to any project and a standout in the technology field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Headline;















