import { MainHeading } from "../MainHeading/MainHeading";
import "./Skills.css";
export const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-wrapper">
        <MainHeading className={"heading-text skills"} text={"Skills"} />

        <div className="skills-container">
          <div className="text-box">
            <h4 className="code-headline">Code</h4>
            <p className="skills-p">HTML</p>
            <p className="skills-p">CSS3</p>
            <p className="skills-p">Javascript</p>
          </div>

          <div className="text-box">
            <h4 className="toolbox-headline">Toolbox</h4>
            <p className="skills-p">Figma</p>
            <p className="skills-p">Slack</p>
            <p className="skills-p">Something else..</p>
          </div>

          <div className="text-box">
            <h4 className="upcoming-headline">Upcoming</h4>
            <p className="skills-p">Unclear</p>
          </div>

          <div className="text-box">
            <h4 className="more-headline">More</h4>
            <p className="skills-p">Being awesome</p>
            <p className="skills-p">Trilingual</p>
            <p className="skills-p">Being cool</p>
          </div>
        </div>
      </div>
    </div>
  );
};
