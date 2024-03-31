import React from "react";
import "./Skills.css";
import { Heading } from "./Heading";

export const Skills = () => {
  return (
    <div className="skills-section">
      <Heading text="Skills" />
      <div className="skills-list-section">
        <div className="skills-list-container">
          <h3>Code</h3>
          <ul className="skills-code-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javasqript ES6</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="skills-list-container">
          <h3>Toolbox</h3>
          <ul className="skills-toolbox-list">
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Figma</li>
            <li>Postman</li>
            <li>Slack</li>
            <li>Woocommerce</li>
            <li>Wordpress</li>
          </ul>
        </div>
        <div className="skills-list-container">
          <h3>Upcoming</h3>
          <ul className="skills-upcoming-list">
            <li>Node.js</li>
          </ul>
        </div>
        <div className="skills-list-container">
          <h3>More</h3>
          <ul className="skills-more-list">
            <li>E-commerce</li>
            <li>Branding</li>
            <li>Social Media</li>
            <li>Marketing</li>
            <li>Agile methodology</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
