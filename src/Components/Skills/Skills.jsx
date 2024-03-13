import { MainHeading } from "../Typography/MainHeading";
import { SubHeading } from "../Typography/SubHeading";

import "./Skills.css";

export const Skills = () => {
  return (
    <section className="skills-container">
      <div className="skills-wrapper">
        <MainHeading className={"skills-heading2"} text={"Skills"} />
        <div className="skills-category">
          <div className="skills-section">
            <SubHeading className={"skills-heading3 code"} text={"Code"} />
            <ul className="skills-listing">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript ES6</li>
              <li>React</li>
              <li>Styled Components</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Zustand</li>
              <li>GitHub</li>
            </ul>
          </div>

          <div className="skills-section">
            <SubHeading
              className={"skills-heading3 toolbox"}
              text={"Toolbox"}
            />
            <ul className="skills-listing">
              <li>Postman</li>
              <li>Figma</li>
              <li>Slack</li>
              <li>Sourcetree</li>
              <li>VS Code</li>
              <li>Render</li>
              <li>Netlify</li>
            </ul>
          </div>

          <div className="skills-section">
            <SubHeading
              className={"skills-heading3 upcoming"}
              text={"Upcoming"}
            />
            <ul className="skills-listing">
              <li>Keynote</li>
              <li>Atom</li>
              <li>Flutter</li>
            </ul>
          </div>

          <div className="skills-section">
            <SubHeading className={"skills-heading3 more"} text={"More"} />
            <ul className="skills-listing">
              <li>Agile Methodology</li>
              <li>Design Lead</li>
              <li>Branding Strategy</li>
              <li>Process Design</li>
              <li>Concept Development</li>
              <li>Hyper Island toolbox</li>
              <li>Trilingual</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
