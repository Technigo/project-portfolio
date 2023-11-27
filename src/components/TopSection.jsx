import React, { useState } from 'react';
import CenteredArrow from '../assets/PinkArrow.svg';  // Correct the import here
import OriginalImage from '../assets/original.jpg';
import './TopSection.css';

function TopSection() {
  // Define a state variable for the introductory text
  const [introText, setIntroText] = useState("Hi, I'm Alexandra Meija");

  // Paragraph text
  const paragraphText =
    "Alexandra identifies herself as a coder with exceptional adjustment skills. She comes from a background in records management and later on project management. In the future, she sees herself combining those skills with her new coding experience.";

    return (
      <div className="top-section">
        <div className="left-content">
          <h1 className="heading-classh1">{introText}</h1>
          <h2 className="heading-classh2">A project manager/records manager with coding skills.</h2>
          <div className="image-container">
            <img src={OriginalImage} alt="Alexandra Meija" className="image-another-class" />
          </div>
          <div className="paragraph-container">
            <p className="heading-paragraph-class">{paragraphText}</p>
          </div>
          <img src={CenteredArrow} alt="Downward Arrow" className="centered-arrow" />
        </div>
      </div>
    );
  }
  
  export default TopSection;


