import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skills-category">
          <h3 className="titel-container">Code</h3>
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
        {/* Add more skill categories */}
        <div className="skills-category">
          <h3>Toolbox</h3>
          <ul className="skills-list">
            <li>Postman</li>
            <li>MongoDB Atlas</li>
            <li>Figma</li>
            <li>Slack</li>
            {/* Add more skills in this category */}
          </ul>
        </div>
      <div className="skills-category">
          <h3>Upcoming</h3>
          <ul className="skills-list">
            <li></li>
            {/* Add more skills in this category */}
          </ul>
        </div> 
        <div className="skills-category">
          <h3>More</h3>
          <ul className="skills-list">
            <li>Branding</li>
            <li>Strategy</li>
            <li>Agile Methodologies</li>
            <li>Creative Processes</li>
            <li>Music Teaching</li>
            <li>Creative Workflows</li>
            <li>Teamwork and Collaboration</li>
            {/* Add more skills in this category */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
