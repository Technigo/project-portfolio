import "./styleComponents/skill.css";
import arrow from "/images/arrow.png";

export const Skill = () => {
  return (
    <div className="skills-container" aria-label="Skills Container">
      <img src={arrow} alt="arrow picture" className="animated-arrow" />
      <h1>Skills</h1>
      <div className="skill-code">
        <h3>CODE</h3>
        <ul className="skills-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SCSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Express.js</li>
          <li>Restful & API </li>
          <li>Python</li>
          <li>C#</li>
        </ul>
      </div>
      <div className="skill-tool">
        <h3>TOOL</h3>
        <ul className="skills-list">
          <li>Slack</li>
          <li>Github</li>
          <li>Figma</li>
          <li>Postman</li>
          <li>Canva</li>
          <li>Adobe Photoshop</li>
          <li>Keynote</li>
        </ul>
      </div>
      <div className="skill-more">
        <h3>More</h3>
        <ul className="skills-list">
          <li>Mob/Pair Programming</li>
          <li>Agile Methodology</li>
          <li>Database Management</li>
          <li>Faciltation</li>
          <li>Porblem Solving</li>
          <li>Version Control</li>
          <li>Soft Skills</li>
        </ul>
      </div>
      <div className="skill-upcoming">
        <h3>Upcoming</h3>
        <ul className="skills-list">
          <li>.Net</li>
          <li>Three.js</li>
          <li>UX/UI</li>
          <li>Typescript</li>
        </ul>
      </div>
    </div>
  );
};
