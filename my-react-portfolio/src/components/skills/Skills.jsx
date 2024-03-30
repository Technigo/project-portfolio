import { Heading } from "../heading/Heading";
import "./Skills.css";

export const Skills = () => {
  return (
    <section className="skills-section">
      <Heading level={2} text="Skills" className="white" />
      <div className="skills-container">
        <div className="skills-wrapper">
          <Heading
            level={3}
            text="Code"
            className="style white"
            id="bkgr-code"
          />

          <div className="white skills-text">
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Javascript</p>
            <p>ES6</p> <p>React</p>
            <p>Styled Components</p>
            <p>GitHub</p>
          </div>
        </div>
        <div className="skills-wrapper">
          <Heading
            level={3}
            text="Toolbox"
            className="style white"
            id="bkgr-toolbox"
          />

          <div className="white skills-text">
            <p>Atom</p>
            <p>Postman</p>
            <p>Adobe Photoshop</p>
            <p>Adobe InDesign</p>
            <p>Keynote</p>
            <p>Figma</p>
            <p>Slack</p>
          </div>
        </div>
        <div className="skills-wrapper">
          <Heading
            level={3}
            text="Upcoming"
            className="style white"
            id="bkgr-upcoming"
          />

          <div className="white skills-text">
            <p>Node.js</p>
          </div>
        </div>
        <div className="skills-wrapper">
          <Heading
            level={3}
            text="More"
            className="style white"
            id="bkgr-more"
          />

          <div className="white skills-text">
            <p>Branding</p>
            <p>Strategy</p>
            <p>Concept development</p>
          </div>
        </div>
      </div>
    </section>
  );
};
