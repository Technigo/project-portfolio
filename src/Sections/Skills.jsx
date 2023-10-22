import Headlines from "../Components/Headlines";

const Skills = () => {
  return (
    <div className="skill-bg page-grid">
      <Headlines title="Skills" />
      <div className="skill-wrapper">
        <div className="skill-group">
          <h2 className="code">Code</h2>
          <ul>
            <li>HTML5 </li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="skill-group">
          <h2 className="toolbox">Toolbox</h2>
          <ul>
            <li>Notion </li>
            <li>Postman</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Figma</li>
            <li>Keynote</li>
            <li>Slack</li>
          </ul>
        </div>
        <div className="skill-group">
          <h2 className="upcoming">Upcoming</h2>
          <ul>
            <li>Node.js </li>
          </ul>
        </div>
        <div className="skill-group">
          <h2 className="more">More</h2>
          <ul>
            <li>Design Lead </li>
            <li>Branding</li>
            <li>Strategy</li>
            <li>Process design</li>
            <li>Concept development</li>
            <li>Agile methodology</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
