import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-section">
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="skills-box">
          <ul>
            <h2>
              <span style={{ backgroundColor: "#ff4575" }}>Code</span>
            </h2>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="skills-box">
          <ul>
            <h2>
              <span style={{ backgroundColor: "#2483e0", color: "white" }}>
                Toolbox
              </span>
            </h2>
            <li>Microsoft Office</li>
            <li>Gimp</li>
            <li>Slack</li>
            <li>Seesaw + ClassDojo </li>
          </ul>
        </div>
        <div className="skills-box">
          <ul>
            <h2>
              <span style={{ backgroundColor: "#6db486", color: "white" }}>
                Upcoming
              </span>
            </h2>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="skills-box">
          <ul>
            <h2>
              <span style={{ backgroundColor: "#ffde30", color: "#0b24f5" }}>
                More
              </span>
            </h2>
            <li>Computing Science Teacher - Key Stage 3</li>
            <li>Educational Curriculum design</li>
            <li>Policing, crime mapping + intelligence systems</li>
            <li>Website maintanence - Wix and Word Press</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
