import React, { useState } from 'react';

function TopSection() {
  // Define a state variable for the introductory text
  const [introText, setIntroText] = useState("Hi, I'm Alexandra Meija");

  // Paragraph text
  const paragraphText =
    "Alexandra identifies herself as a coder with exceptional adjustment skills. She comes from a background in records management and later on project management. In the future, she sees herself combining those skills with her new coding experience.";

  return (
    <div>
      <div className="top-section">
        <div className="left-content">
          <h1 className="heading-classh1">Hi, I'm Alexandra Meija</h1>
          <h2 className="heading-classh2">A project manager/records manager with coding skills.</h2>
          <div className="image-paragraph-section">
            <img src="src/original.jpg" alt="Your Image Description" className="image-another-class" />
            <p className="heading-paragraph-class">{paragraphText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection;


