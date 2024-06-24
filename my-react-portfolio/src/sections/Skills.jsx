import "../styling/Skills.css";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1 className="skills">Skills</h1>
      <div className="skillsWrapper">
        <div className="codeContainer">
          <h2 className="code">Code</h2>
          <p className="skill">HTML5</p>
          <br />
          <p className="skill">CSS3</p>
          <br />
          <p className="skill">JavaScript ES6</p>
          <br />
          <p className="skill">React</p>
          <br />
          <p className="skill">Styled Components</p>
          <br />
          <p className="skill">GitHub</p>
        </div>
        <div className="toolboxContainer">
          <h2 className="toolbox">Toolbox</h2>
          <p className="skill">Figma</p>
          <br />
          <p className="skill">Postman</p>
          <br />
          <p className="skill">Slack</p>
          <br />
          <p className="skill">Stack Overflow</p>
          <br />
          <p className="skill">Lighthouse</p>
        </div>
        <div className="upcomingContainer">
          <h2 className="upcoming">Upcoming</h2>
          <p className="skill">React Router</p>
          <br />
          <p className="skill">Mongo DB</p>
          <br />
          <p className="skill">Express.js</p>
        </div>
        <div className="moreContainer">
          <h2 className="more">More</h2>
          <p className="skill">Branding</p>
          <br />
          <p className="skill">Design Lead</p>
          <br />
          <p className="skill">Strategy</p>
          <br />
          <p className="skill">Concept development</p>
          <br />
          <p className="skill">Agile methology</p>
          <br />
          <p className="skill">Hyper island toolbox</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
