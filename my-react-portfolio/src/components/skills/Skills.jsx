import { Heading } from "../heading/Heading";
import "./Skills.css";

export const Skills = () => {
  return (
    <section className="flex skills-section">
      <div className="flex skills-container">
        <Heading level={1} text="Skills" className="white" />

        <div className="flex skills-wrapper">
          <Heading
            level={4}
            text="Code"
            className="style white"
            id="bkgr-pink"
          />
          <p className="white skills-text">
            HTML5 CSS3 Javascript ES6 React Styled Components GitHub
          </p>
        </div>
        <div className="flex skills-wrapper">
          <Heading
            level={4}
            text="Toolbox"
            className="style white"
            id="bkgr-blue"
          />

          <p className="white skills-text">
            Atom Postman Adobe Photoshop Adobe Illustrator Figma Keynote Slack
          </p>
        </div>
        <div className="flex skills-wrapper">
          <Heading
            level={4}
            text="Toolbox"
            className="style white"
            id="bkgr-green"
          />

          <p className="white skills-text">Node.js</p>
        </div>
        <div className="flex skills-wrapper">
          <Heading
            level={4}
            text="More"
            className="style white"
            id="bkgr-yellow"
          />

          <p className="white skills-text">
            Design Lead Branding Strategy Process design Concept development
            Agile methodology Hyper Island toolbox
          </p>
        </div>
      </div>
    </section>
  );
};
