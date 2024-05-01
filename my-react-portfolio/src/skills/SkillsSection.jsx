import "./SkillsSection.css";

export const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-box">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-part-box">
          <div className="skills-part">
            <h2 className="tech">Tech</h2>
            <p>HTML5</p>
            <p>CSS</p>
            <p>JavaScriptES6</p>
            <p>React</p>
          </div>
          <div className="skills-part">
            <h2 className="toolbox">Toolbox</h2>
            <p>GitHub</p>
            <p>Netlify</p>
            <p>Postman</p>
            <p>Lighthouse</p>
          </div>
          <div className="skills-part">
            <h2 className="more">More</h2>
            <p>Remote Work</p>
            <p>Pair-Programming</p>
            <p>Asynchronous Working</p>
            <p>Agile Web Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};
