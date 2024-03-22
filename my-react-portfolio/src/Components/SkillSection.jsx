import './skillSection.css'

export const SkillSection = () => {
  return (
    <div className="skillSection">
      <div className="skillSectionContainer">
        <h1>Skills</h1>
        <div className="singleSkillSection">
          <h2>Code</h2>
          <p>HTML5</p>
          <p> CSS3 </p> <p>Javascript</p> <p>ES6</p>
          <p>React Styled Components</p>
          <p> GitHub</p>
        </div>
        <h2>Toolbox</h2>
        <ul>
          Atom Postman Adobe Photoshop Adobe Illustrator Figma Keynote Slack
        </ul>
        <h2>Upcoming</h2>
        <ul>Node.js</ul>
        <h2>More</h2>
        <ul>
          Design Lead Branding Strategy Process design Concept development Agile
          methodology Hyper Island toolbox
        </ul>
      </div>
    </div>
  )
}
