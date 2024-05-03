import "./Skills.css"

export const Skills = () => {
  return (
    <div className="section" id="skills-section">
      <h1 className="ivory-text" id="skills-heading">
        Skills
      </h1>
      <div className="card ivory-text" id="skills-card-one">
        <div id="skills-box">
          <h2 className="cerise">Code</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>ES6</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div id="skills-box">
          <h2 className="green">Toolbox</h2>
          <ul>
            <li>VSCode</li>
            <li>GitHub</li>
            <li>Postman</li>
            <li>Figma</li>
            <li>Adobe Illustrator</li>
            <li>Adobe InDesign</li>
            <li>Slack</li>
          </ul>
        </div>
      </div>
      <div className="card ivory-text" id="skills-card-two">
        <div id="skills-box">
          <h2 className="orange">Upcoming</h2>
          <ul>
            <li>MongoDB</li>
            <li>Python</li>
          </ul>
        </div>
        <div id="skills-box">
          <h2 className="blue">More</h2>
          <ul>
            <li>Teaching</li>
            <li>Leadership</li>
            <li>Agile methodology</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
