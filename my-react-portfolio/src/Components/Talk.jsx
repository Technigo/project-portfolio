import React from 'react';
import './Talk.css';
import linneaImage from '../assets/Linnea.jpg'; 

const Talk = () => {
  return (
    <div className="talk-container">
      <h2>Let's talk</h2>
      <img src={linneaImage} alt="Linnea Johansson" className="profile-image" />
      <h3>Linnea Johansson</h3>
      <h3>+46 (0) 76 208 42 20</h3>
      <h3>linneajoh@gmail.com</h3>
    </div>
  );
};

export default Talk;
