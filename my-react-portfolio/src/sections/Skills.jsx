import "../styling/Skills.css";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1 className="skills">Skills</h1>
      <div className="codeContainer">
        <h2 className="code">Code</h2>
        <p>HTML5</p>
        <br />
        <p>CSS3</p>
        <br />
        <p>JavaScript ES6</p>
        <br />
        <p>React</p>
        <br />
        <p>Styled Components</p>
        <br />
        <p>GitHub</p>
      </div>
      <div className="toolboxContainer">
        <h2 className="toolbox">Toolbox</h2>
        <p>Figma</p>
        <br />
        <p>Postman</p>
        <br />
        <p>Slack</p>
        <br />
        <p>Stack Overflow</p>
        <br />
        <p>Lighthouse</p>
      </div>
      <div className="upcomingContainer">
        <h2 className="upcoming">Upcoming</h2>
        <p>React Router</p>
        <br />
        <p>Mongo DB</p>
        <br />
        <p>Express.js</p>
      </div>
      <div className="moreContainer">
        <h2 className="more">More</h2>
        <p>Branding</p>
        <br />
        <p>Design Lead</p>
        <br />
        <p>Strategy</p>
        <br />
        <p>Concept development</p>
        <br />
        <p>Agile methology</p>
        <br />
        <p>Hyper island toolbox</p>
      </div>
    </div>
  );
};

export default Skills;
