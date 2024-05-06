import { PageTopic } from "../PageTopic";
import "./skills.css";

export const Skills = () => {
  return (
    <>
      <section className="skill-wrapper">
        <PageTopic className={"skills"} pageTopic={"Skills"} />
        <div className="skill-container" aria-label="Tech skills">
          <div className="skillbox">
            <h4 className="code-head">Code</h4>
            <div className="listbox">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>Javascript ES6</p>
              <p>React</p>
              <p>Styled Components</p>
              <p>Tailwind</p>
              <p>Express.js</p>
              <p>GitHub</p>
              <p>Node.js</p>
            </div>
          </div>
          <div className="skillbox">
            <h4 className="toolbox-head">Toolbox</h4>
            <div className="listbox">
              <p>Postman</p>
              <p>Adobe Photoshop</p>
              <p>Adobe Illustrator</p>
              <p>Figma</p>
              <p>Slack</p>
              <p>APIs</p>
              <p>Git</p>
            </div>
          </div>
          <div className="skillbox">
            <h4 className="upcoming-head">Upcoming</h4>
            <div className="listbox">
              <p>Mongo DB</p>
            </div>
          </div>
          <div className="skillbox">
            <h4 className="more-head">More</h4>
            <div className="listbox">
              <p>Concept development</p>
              <p>Agile methodology</p>
              <p>Accessibility</p>
              <p>Mob programming</p>
              <p>Pair programming</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};