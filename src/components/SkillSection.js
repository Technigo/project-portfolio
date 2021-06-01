import React from 'react'

import './SkillSection.css'

export const SkillSection = () => {
  return (
    <section className="skills-container">
      <h4 className="skills-heading">SKILLS</h4>
      <div className="skills-boxes">
        <div className="skill-column-1">
          <div className="skill-box">
            <h6 className="skill-group-heading">CODE</h6>
            <ul className="skill-list">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript ES6</li>
              <li>React</li>
              <li>React Native</li>
              <li>Redux</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="skill-box">
            <h6 className="skill-group-heading">UPCOMING</h6>
            <ul className="skill-list">
              <li>UX/UI Design</li>
              <li>WordPress</li>
            </ul>
          </div>
        </div>
        <div className="skill-column-2">
          <div className="skill-box">
            <h6 className="skill-group-heading">TOOLBOX</h6>
            <ul className="skill-list">
              <li>VS Code</li>
              <li>GitHub</li>
              <li>StackOverflow</li>
              <li>CodePen</li>
              <li>CodeSandbox</li>
              <li>Expo</li>
              <li>Netlify</li>
              <li>Heroku</li>
              <li>Mongo DB</li>
              <li>Figma</li>
              <li>Trello</li>
              <li>Adobe Creative Suite</li>
              <li>Micosoft Office</li>
              <li>Zedonk</li>
              <li>Visma</li>
            </ul>
          </div>
        </div>
        <div className="skill-column-3">
          <h6 className="skill-group-heading">MORE</h6>
          <ul className="skill-list">
            <li>Concept Development</li>
            <li>Product Development</li>
            <li>Visual Communication</li>
            <li>Project Management</li>
            <li>Supply Chain Management</li>
            <li>Excellent Communication Skills</li>
            <li>Organisational Skills</li>
          </ul>
        </div>
      </div>
    </section>
  )
}