import './skillSection.css'

export const SkillSection = () => {
  return (
    <div className="skillSection">
      <h1>Skills</h1>
      <div className="skillSectionContainer">
        <div className="pairOfSkills">
          <div className="singleSkillSection">
            <h2 className="codeTitle">Code</h2>
            <p>HTML5</p>
            <p>CSS3 </p> <p>Javascript</p> <p>ES6</p>
            <p>React Styled Components</p>
            <p>React.js</p>
            <p>GitHub</p>
          </div>

          <div className="singleSkillSection">
            <h2 className="toolboxTitle">Toolbox</h2>
            <p>Visual Studio Code</p>
            <p>Postman</p> <p>Figma</p> <p>Slack</p>
          </div>
        </div>
        <div className="pairOfSkills">
          <div className="singleSkillSection">
            <h2 className="upcomingTitle">Upcoming</h2>
            <p>Node.js</p>
            <p>MongoDB</p>
          </div>

          <div className="singleSkillSection">
            <h2 className="moreTitle">More</h2>
            <p>Strategy </p>
            <p>Concept development</p>
            <p>Agile methodology</p>
            <p>Debugging</p>
          </div>
        </div>
      </div>
    </div>
  )
}
