import "./Skills.css";

export const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-box">
        <h1>Skills</h1>
        <div className="skills-wrapper">
          <div className="skills-list">
            <h2>
              <span className="code-list">Code</span>
            </h2>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript ES6</li>
              <li>React</li>
              <li>Styled Components</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div className="skills-list">
            <h2>
              <span className="toolbox-list">Toolbox</span>
            </h2>
            <ul>
              <li>Postman</li>
              <li>Adobe inDesign</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Figma</li>
              <li>Slack</li>
            </ul>
          </div>
          <div className="skills-list">
            <h2>
              <span className="upcoming-list">Upcoming</span>
            </h2>
            <ul>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="skills-list">
            <h2>
              <span className="more-list">More</span>
            </h2>
            <ul>
              <li>Agile methodology</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
