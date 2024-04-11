import "./Skills.css";

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
          <h3>Toolbox</h3>
          <p>Postman</p>
          <p>GIMP</p>
          <p>Figma</p>
          <p>Slack</p>
          <p>Photoshop</p>
          <p>Canva</p>
        </div>
        <div className="sub subUpcoming">
          <h3>Upcoming</h3>
          <p>Node.js</p>
        </div>
        <div className="sub subMore">
          <h3>More</h3>
          <p>Concept development</p>
          <p>Pair/mob-programming</p>
        </div>
      </div>
    </div>
  );
};