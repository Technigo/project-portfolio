import { Grid } from "./ui/Grid";
import { Tag } from './Tag';
import './MySkills.css';

export const Skill = () => {
  return (
    <Grid background="white">
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="skills-sections">

          <div className="skills-section">
            <Tag text="Code" />
            <div className="skills-section-content">
              HTML5<br />
              CSS3<br />
              JavaScript ES6<br />
              React<br />
              Styled Components<br />
              GitHub
            </div>
          </div>

          <div className="skills-section">
            <Tag text="Toolbox" />
            <div className="skills-section-content">
              Atom<br />
              Postman<br />
              Adobe Photoshop<br />
              Adobe Illustrator<br />
              Figma<br />
              Keynote<br />
              Slack
            </div>
          </div>

          <div className="skills-section">
            <Tag text="Upcoming" />
            <div className="skills-section-content">
              Node.js
            </div>
          </div>

          <div className="skills-section">
            <Tag text="More" />
            <div className="skills-section-content">
              Branding<br />
              Strategy<br />
              Process Design<br />
              Concept Development<br />
              Agile methodology
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};
