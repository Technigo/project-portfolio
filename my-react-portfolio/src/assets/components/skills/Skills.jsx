import { PageTopic } from "../smallComps/PageTopic"
import "./skills.css"

export const Skills = () => {
    return (
      <>
        <section className="skill-wrapper">
          <PageTopic className={"skills"} pageTopic={"Skills"} />
          <div className="skill-container">
            <div className="code">
              <h4 className="code-head">Code</h4>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>Javascript ES6</p>
              <p>React</p>
              <p>Styled Components</p>
              <p>GitHub</p>
            </div>
            <div className="toolbox">
              <h4 className="toolbox-head">Toolbox</h4>
              <p>Postman</p>
              <p>Figma</p>
              <p>Slack</p>
              <p>APIs</p>
              <p>Git</p>
            </div>
            <div className="upcoming">
              <h4 className="upcoming-head">Upcoming</h4>
              <p>Node.js</p>
            </div>
            <div className="more">
              <h4 className="more-head">More</h4>
              <p>Concept development</p>
              <p>Agile methodology</p>
              <p>Accessibility</p>
              <p>Mob programming</p>
              <p>Pair programming</p>
            </div>
          </div>
        </section>
      </>
    );
}