import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skills-category">
          <h3 className="title-container">Code</h3>
          <ul className="skills-list code-skills">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Styled Components</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3 className="title-container">Toolbox</h3>
          <ul className="skills-list">
            <li>Postman</li>
            <li>MongoDB Atlas</li>
            <li>Figma</li>
            <li>Slack</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3 className="title-container">More</h3>
            <ul className="skills-list">
              <li>Branding</li>
              <li>Strategy</li>
              <li>Agile Methodologies</li>
              <li>Creative Processes</li>
              <li>Music Teaching</li>
              <li>Creative Workflows</li>
              <li>Teamwork and Collaboration</li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
