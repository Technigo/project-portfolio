import { Heading } from "../heading/Heading";
import "./Skills.css";

export const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="title-wrapper">
          <Heading level={2} text="Skills" className="light" />
        </div>

        <div className="code">
          <Heading
            level={3}
            text="Code"
            className="style light"
            id="bkgr-code"
          />

          <div className="light skills-text">
            <p>HTML5</p>
            <p>CSS3</p>
            <p>JavaScript</p>
            <p>ES6</p> <p>React</p>
            <p>Styled Components</p>
            <p>GitHub</p>
          </div>
        </div>

        <div className="toolbox">
          <Heading
            level={3}
            text="Toolbox"
            className="style light"
            id="bkgr-toolbox"
          />

          <div className="light skills-text">
            <p>Visual Studio Code</p>
            <p>Adobe Photoshop</p>
            <p>Adobe InDesign</p>
            <p>Figma</p>
            <p>Slack</p>
            <p>Google Analytics</p>
          </div>
        </div>
        <div className="upcoming">
          <Heading
            level={3}
            text="Upcoming"
            className="style light"
            id="bkgr-upcoming"
          />

          <div className="light skills-text">
            <p>Node.js</p>
            <p>MongoDB</p>
            <p>Typescript</p>
          </div>
        </div>
        <div className="more">
          <Heading
            level={3}
            text="More"
            className="style light"
            id="bkgr-more"
          />

          <div className="light skills-text">
            <p>Project management</p>
            <p>Event management</p>
            <p>Media planning</p>
            <p>Reports</p>
          </div>
        </div>
      </div>
    </section>
  );
};
