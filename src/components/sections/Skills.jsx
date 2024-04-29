import "./Skills.css"

export const Skills = () => {
  return (
    <div className="skills">
      <h2 className="title">Skills</h2>
      <div className="skill-container">
        <div className="skill-card">
          <h3 className="code-title">Code</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>ReactJS</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="toolbox-title">Toolbox</h3>
          <ul>
            <li>Postman</li>
            <li>Figma</li>
            <li>Tailwind CSS</li>
            <li>RESTful API</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="upcoming-title">Upcoming</h3>
          <ul>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Express</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="more-title">More</h3>
          <ul>
            <li>Agile Methodology</li>
            <li>Pair Programming</li>
            <li>Responsive Design</li>
            <li>Web Accessibility</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
