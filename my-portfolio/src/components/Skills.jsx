import "./skills.css";

export const Skills = () => {
  return (
    <div className="skills">
      <div>
        <h2>Skills</h2>
      </div>
      <div className="subcategories">
        <div className="sub subCode">
          <h3>Code</h3>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Javascript ES6</p>
          <p>React</p>
          <p>Styled Components</p>
          <p>GitHub</p>
        </div>
        <div className="sub subTools">
          <h3>Tools</h3>
          <p>Postman</p>
          <p>GIMP</p>
          <p>Figma</p>
          <p>Slack</p>
        </div>
        <div className="sub subUpcoming">
          <h3>Upcoming</h3>
          <p>Node.js</p>
        </div>
        <div className="sub subMore">
          <h3>More</h3>
          <p>Agile methodology</p>
          <p>Concept development</p>
        </div>
      </div>
    </div>
  );
};
