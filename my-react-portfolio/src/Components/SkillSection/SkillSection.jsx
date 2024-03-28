import './skillSection.css'

export const SkillSection = () => {
  return (
    <div className="skillSection">
      <div className="skillSectionContainer">
        <h1>Skills</h1>
        <div className="singleSkillSection">
          <h2 className="codeTitle">Code</h2>
          <p>HTML5</p>
          <p>CSS3 </p> <p>Javascript</p> <p>ES6</p>
          <p>React Styled Components</p>
          <p>React.js</p>
          <p>GitHub</p>
        </div>
        <h2 className="toolboxTitle">Toolbox</h2>
        <div className="singleSkillSection">
          <p>Visual Studio Code</p>
          <p>Postman</p> <p>Figma</p> <p>Slack</p>
        </div>
        <h2 className="upcomingTitle">Upcoming</h2>
        <div className="singleSkillSection">
          <p>Node.js</p>
          <p>MongoDB</p>
        </div>

        <h2 className="moreTitle">More</h2>
        <div className="singleSkillSection">
          <p>Strategy </p>
          <p>Concept development</p>
          <p>Agile methodology</p>
          <p>Debugging</p>
        </div>
      </div>
    </div>
  )
}
