import { MainHeading } from "../MainHeading/MainHeading";
import "./Skills.css";

export const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-wrapper">
        <MainHeading className={"heading-text skills"} text={"Skills"} />

        <div className="skills-container">
          <div className="text-box">
            <h2 className="skill-headline code-headline">Code</h2>
            <p className="skills-p">HTML</p>
            <p className="skills-p">CSS3</p>
            <p className="skills-p">Javascript</p>
          </div>

          <div className="text-box">
            <h2 className="skill-headline toolbox-headline">Toolbox</h2>
            <p className="skills-p">Figma</p>
            <p className="skills-p">Slack</p>
            <p className="skills-p">Something else..</p>
          </div>

          <div className="text-box">
            <h2 className="skill-headline upcoming-headline">Upcoming</h2>
            <p className="skills-p">Unclear</p>
          </div>

          <div className="text-box">
            <h2 className="skill-headline more-headline">More</h2>
            <p className="skills-p">Being awesome</p>
            <p className="skills-p">Trilingual</p>
            <p className="skills-p">Being cool</p>
          </div>
        </div>
      </div>
    </section>
  );
};
