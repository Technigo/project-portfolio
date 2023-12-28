import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skills-category">
          <h3 className="category-title code">Code</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3 className="category-title toolbox">Toolbox</h3>
          <ul>
            <li>Atom</li>
            <li>Postman</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Figma</li>
            <li>Keynote</li>
            <li>Slack</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3 className="category-title upcoming">Upcoming</h3>
          <ul>
            <li>Nodejs</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3 className="category-title more">More</h3>
          <ul>
            <li>Design Lead</li>
            <li>Branding</li>
            <li>Strategy</li>
            <li>Process design</li>
            <li>Concept development</li>
            <li>Agile methodology</li>
            <li>Hyper Island toolbox</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
