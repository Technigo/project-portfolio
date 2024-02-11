import React, { useState } from 'react';
import CenteredArrow from '../assets/PinkArrow.svg';
import OriginalImage from '../assets/original.jpg';
import './TopSection.css';

function TopSection({ scrollToContact }) { // Accept the scrollToContact prop
  const [introText, setIntroText] = useState("Hi, I'm Alexandra Meija");
  const paragraphText =
    "Alexandra identifies herself as a coder with exceptional adjustment skills. She comes from a background in records management and later on project management. In the future, she sees herself combining those skills with her new coding experience.";

  return (
    <div className="top-section">
      <div className="left-content">
        <h1 className="heading-classh1">{introText}</h1>
        <h2 className="heading-classh2">A project manager/records manager with coding skills.</h2>
        <div className="content-container">
          <div className="image-container">
            <img src={OriginalImage} alt="Alexandra Meija" className="image-another-class" />
          </div>
          <div className="paragraph-container">
            <p className="heading-paragraph-class">{paragraphText}</p>
          </div>
        </div>
        <img
          src={CenteredArrow}
          alt="Downward Arrow"
          className="centered-arrow"
          onClick={scrollToContact} // Add the onClick handler
        />
      </div>
    </div>
  );
}

export default TopSection;


