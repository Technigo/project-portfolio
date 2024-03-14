import "./skills.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills">
        <h2 className="skills-title">Skills</h2>
        <div className="skill-set">
          <div className="code">
            <h3 className="code-title">Code</h3>
            <ul className="code-list">
              <li className="code-item">HTML5</li>
              <li className="code-item">CSS3</li>
              <li className="code-item">Tailwind</li>
              <li className="code-item">JavaScript ES6</li>
              <li className="code-item">React</li>
              <li className="code-item">Git</li>
              <li className="code-item">API</li>
              <li className="code-item">Node.js</li>
              <li className="code-item">MongoDB</li>
              <li className="code-item">Express</li>
            </ul>
          </div>
          <div className="toolbox">
            <h3 className="toolbox-title">Toolbox</h3>
            <ul className="toolbox-list">
              <li className="toolbox-item">Figma</li>
              <li className="toolbox-item">VSCode</li>
              <li className="toolbox-item">Slack</li>
            </ul>
          </div>
          <div className="upcoming">
            <h3 className="upcoming-title">Upcoming</h3>
            <ul className="upcoming-list">
              <li className="upcoming-item">Next.js</li>
              <li className="upcoming-item">GraphQL</li>
              <li className="upcoming-item">C#</li>
              <li className="upcoming-item">Java</li>
            </ul>
          </div>
          <div className="more">
            <h3 className="more-title">More</h3>
            <ul className="more-list">
              <li className="more-item">Agile methodology</li>
              <li className="more-item">Pair programming</li>
              <li className="more-item">Mob programming</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
