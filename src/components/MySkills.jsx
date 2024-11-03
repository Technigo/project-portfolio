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
              Responsive Design<br />
              Accessibility
            </div>
          </div>

          <div className="skills-section">
            <Tag text="Toolbox" />
            <div className="skills-section-content">
              Visual Studio Code<br />
              Git<br />
              Github<br />
              Postman<br />
              Figma<br />
              Slack
            </div>
          </div>

          <div className="skills-section">
            <Tag text="Upcoming" />
            <div className="skills-section-content">
              TypeScript<br />
              Node.js
            </div>
          </div>

          <div className="skills-section">
            <Tag text="More" />
            <div className="skills-section-content">
              Problem Solving<br />
              Learning Agility<br />
              Design<br />
              Collaboration<br />
              Communication<br />
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};
