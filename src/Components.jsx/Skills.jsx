import "./Skills.css";

// My skills in coding //
export const Skills = () => {
  return (
    <div className="Skills">
      <h1>Skills</h1>
      <div className="column">
        <h2 className="code-heading">Code</h2>
        <p>HTML, CSS, JavaScript, React, Styled components, Github, Node.js</p>
      </div>
      <div className="column">
        <h2 className="toolbox-heading">Toolbox</h2>
        <p>Figma, Slack, Stack Overflow</p>
      </div>
      <div className="column">
        <h2 className="upcoming-heading">Upcoming</h2>
      </div>
      <div className="column">
        <h2 className="more-heading">More</h2>
        <p></p>
      </div>
    </div>
  );
};
