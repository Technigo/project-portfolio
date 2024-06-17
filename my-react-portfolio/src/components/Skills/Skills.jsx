import "./Skills.css";

export const Skills = () => {
  const skillCategories = [
    {
      heading: "Code",
      text: "HTML5\nCSS3\nJavascript ES6\nReact\nStyled Components\nGitHub\nCodePen",
    },
    { heading: "Toolbox", text: "Atom\nPostman\nFigma\nSlack" },
    { heading: "Upcoming", text: "Node.js" },
    { heading: "More", text: "Add info here" },
  ];

  return (
    <div className="skills-section">
      <div className="skills-container">
        <div className="skills-heading">
          <h1>Skills</h1>
        </div>
        <div className="skills-cards">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h2>{category.heading}</h2>
              <p>{category.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
