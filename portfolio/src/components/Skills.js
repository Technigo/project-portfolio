import React from "react";
import '../styles/skills.css'

const Skills = () => {
    return (
        <section className="skills-section">
        <h2 className="skills-header">Skills</h2>
        <section className="skills-list">
          <div className="code">
            <h3>Code</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript ES6</li>
              <li>React</li>
              <li>Styled Components</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div className="toolbox">
            <h3 className="skills-header">Toolbox</h3>
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Premiere Pro</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="more">
            <h3 className="skills-header">More</h3>
            <ul>
              <li>Agile methodology</li>
              <li>Branding</li>
              <li>Comm strategy</li>
              <li>Crisis communication</li>
              <li>Content editing</li>
              <li>Accessible writing</li>
              <li>GDPR and Schrems II</li>
            </ul>
          </div>
          <div className="upcoming">
            <h3 className="skills-header">Upcoming</h3>
            <ul>
              <li>Node.js</li>
              <li>Redux</li>
            </ul>
          </div>
        </section>
      </section>  
    )
}

export default Skills;