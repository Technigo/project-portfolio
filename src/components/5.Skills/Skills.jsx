import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-content">
        <h2 className="skills-heading">Skills</h2>

        <section className="skills-box">
          <h4 className="skills-subheading">Code</h4>
          <ul className="list-box">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>GitHub</li>
          </ul>
        </section>

        <section className="skills-box">
          <h4 className="skills-subheading">Toolbox</h4>
          <ul className="list-box">
            <li>Atom</li>
            <li>Postman</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Figma</li>
            <li>Keynote</li>
            <li>Slack</li>
          </ul>
        </section>

        <section className="skills-box">
          <h4 className="skills-subheading">Upcoming</h4>
          <ul className="list-box">
            <li>Node.js</li>
          </ul>
        </section>

        <section className="skills-box">
          <h4 className="skills-subheading">More</h4>
          <ul className="list-box">
            <li>User Experience</li>
            <li>Agile methodology</li>
            <li>Accessibility</li>
            <li>Prototypes</li>
            <li>Design Thinking</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
