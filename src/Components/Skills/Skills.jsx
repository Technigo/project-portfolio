import React from "react";
import { Heading1 } from "../Heading1/Heading1";
import { Heading3 } from "../Heading3/Heading3";

import "./Skills.css";

export const Skills = () => {
  return (
    <section className="skills-container">
      <div className="skills-wrapper">
        <Heading1 className={"skills-heading1"} text={"Skills"} />
        <div className="skills-category">
          <div className="skills-section">
            <Heading3 className={"skills-heading3 code"} text={"Code"} />
            <ul className="skills-listing">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript ES6</li>
              <li>React</li>
              <li>Styled Components</li>
              <li>GitHub</li>
            </ul>
          </div>

          <div className="skills-section">
            <Heading3 className={"skills-heading3 toolbox"} text={"Toolbox"} />
            <ul className="skills-listing">
              <li>Atom</li>
              <li>Postman</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Figma</li>
              <li>Keynote</li>
              <li>Slack</li>
            </ul>
          </div>

          <div className="skills-section">
            <Heading3
              className={"skills-heading3 upcoming"}
              text={"Upcoming"}
            />
            <ul className="skills-listing">
              <li>Node.js</li>
            </ul>
          </div>

          <div className="skills-section">
            <Heading3 className={"skills-heading3 more"} text={"More"} />
            <ul className="skills-listing">
              <li>Design Lead</li>
              <li>Branding Strategy</li>
              <li>Process Design</li>
              <li>Concept Development</li>
              <li>Agile Methodology</li>
              <li>Hyper Island toolbox</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
