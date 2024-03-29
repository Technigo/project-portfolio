import { Heading } from "../heading/Heading";
import "./Skills.css";

export const Skills = () => {
  return (
    <section className="flex skills-section">
      <div className="flex skills-container">
        <Heading level={2} text="Skills" className="white" />

        <div className="flex skills-wrapper">
          <Heading
            level={3}
            text="Code"
            className="style white"
            id="bkgr-pink"
          />
          <p className="white skills-text">
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Javascript</p>
            <p>ES6</p> <p>React</p>
            <p>Styled Components</p>
            <p>GitHub</p>
          </p>
        </div>
        <div className="flex skills-wrapper">
          <Heading
            level={3}
            text="Toolbox"
            className="style white"
            id="bkgr-blue"
          />

          <p className="white skills-text">
            <p>Atom</p>
            <p>Postman</p>
            <p>Adobe Photoshop</p>
            <p>Adobe InDesign</p>
            <p>Keynote</p>
            <p>Figma</p>
            <p>Slack</p>
          </p>
        </div>
        <div className="flex skills-wrapper">
          <Heading
            level={3}
            text="Toolbox"
            className="style white"
            id="bkgr-green"
          />

          <p className="white skills-text">Node.js</p>
        </div>
        <div className="flex skills-wrapper">
          <Heading
            level={3}
            text="More"
            className="style white"
            id="bkgr-yellow"
          />

          <p className="white skills-text">
            <p>Branding</p>
            <p>Strategy</p>
            <p>Concept development</p>
          </p>
        </div>
      </div>
    </section>
  );
};
