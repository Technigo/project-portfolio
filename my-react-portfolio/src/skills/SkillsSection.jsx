import "./SkillsSection.css";

export const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-box">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-part">
          <h2 className="tech">Tech</h2>
          <p>HTML5</p>
          <p>CSS</p>
          <p>JavaScriptES6</p>
          <p>API&apos;s</p>
          <p>React</p>
          <p>JSX</p>
        </div>
        <div className="skills-part">
          <h2 className="toolbox">Toolbox</h2>
          <p>GitHub</p>
          <p>Figma</p>
          <p>Netlify</p>
          <p>Slack</p>
          <p>Postman</p>
        </div>
        <div className="skills-part">
          <h2 className="more">More</h2>
          <p>Remote Work</p>
          <p>Pair-Programming</p>
          <p>Mob-Programming</p>
          <p>Asynchronous Working</p>
          <p>Marketing</p>
        </div>
      </div>
    </div>
  );
};
