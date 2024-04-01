import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-content">
        <section className="skills-box">
          <h3 className="skills-subheading">Code</h3>
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
          <h3 className="skills-subheading">Toolbox</h3>
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
          <h3 className="skills-subheading">Upcoming</h3>
          <ul className="list-box">
            <li>Node.js</li>
          </ul>
        </section>

        <section className="skills-box">
          <h3 className="skills-subheading">More</h3>
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
