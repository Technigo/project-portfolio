import React, { useState } from 'react';
import demodefault from './demodefault.png';
import demohover from './demohover.png';
import codedefault from './codedefault.png';
import codehover from './codehover.png';

export const Projects = ({ projectItems }) => {
  const containerStyle = {
    marginLeft: '35%', // Adjust the percentage as needed
    marginRight: '12%',
  };

  const projectContainerStyle = {
    display: 'flex',
    alignItems: 'flex-start', // Align items to the top
    marginTop: '10%',
    marginBottom: '10%',
    padding: '20px', // Adjust padding as needed
  };

  const imageContainerStyle = {
    backgroundColor: 'blue', // Set your desired background color here
    padding: '10px', // Optional: Add padding to the image container
    width: '60%', // Set the desired width of the image container
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block', // Remove any residual whitespace below the image
    float: 'right', // Float the image to the right
    marginTop: '-10px', // Move the image upward
    marginRight: '-10px', // Move the image to the right
  };

  const headingStyle = {
    fontSize: '70px',
    color: 'blue',
    textAlign: 'left', // Left-align the text
    marginLeft: '10px', // Add space to the left of the heading
  };

  const nameStyle = {
    fontSize: '20px',
    textAlign: 'left', // Left-align the text
    marginLeft: '10px', // Add space to the left of the name
  };

  const descriptionStyle = {
    fontSize: '14px',
    textAlign: 'left', // Left-align the text
    marginLeft: '10px', // Add space to the left of the description
  };

  const tagStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '10px', // Add space to the left of the tags
  };

  const tagItemStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '4px 8px',
    marginRight: '8px',
    marginBottom: '8px',
    fontSize: '14px',
  };

  const [isDemoHovered, setDemoHovered] = useState(false);
  const [isCodeHovered, setCodeHovered] = useState(false);

  // Define the button width and height
  const buttonWidth = '';
  const buttonHeight = '40px';

  return (
    <div style={containerStyle}>
      <div>
        <p style={headingStyle}><strong>Featured Projects</strong></p>
        {projectItems.map((item, index) => (
          <div key={index} style={projectContainerStyle}>
            <div style={imageContainerStyle}>
              <img src={item.image} style={imageStyle} alt={item.name} />
            </div>
            <div>
              <div style={nameStyle}><strong>{item.name}</strong></div>
              <div style={tagStyle}>
                {item.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} style={tagItemStyle}>{tag}</div>
                ))}
              </div>
              <div style={descriptionStyle}>{item.description}</div>
              <div style={{ marginTop: '10px' }}>
                <a
                  href={item.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCodeHovered(true)}
                  onMouseLeave={() => setCodeHovered(false)}
                >
                  <img
                    src={isCodeHovered ? codehover : codedefault}
                    alt="Code"
                    style={{ width: buttonWidth, height: buttonHeight }}
                  />
                </a>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: '10px' }}
                  onMouseEnter={() => setDemoHovered(true)}
                  onMouseLeave={() => setDemoHovered(false)}
                >
                  <img
                    src={isDemoHovered ? demohover : demodefault}
                    alt="Demo"
                    style={{ width: buttonWidth, height: buttonHeight }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
