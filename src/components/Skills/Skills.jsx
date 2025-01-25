import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-wrapper">
        <div className="skills-section">
          <h3 className="skills-category">Code</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="skills-section">
          <h3 className="skills-category">Toolbox</h3>
          <ul>
            <li>Atom</li>
            <li>Postman</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Figma</li>
            <li>Keynote</li>
            <li>Slack</li>
          </ul>
        </div>
        <div className="skills-section">
          <h3 className="skills-category">Upcoming</h3>
          <ul>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="skills-section">
          <h3 className="skills-category">More</h3>
          <ul>
            <li>Branding</li>
            <li>Strategy</li>
            <li>Process Design</li>
            <li>Concept Development</li>
            <li>Agile methodology</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
