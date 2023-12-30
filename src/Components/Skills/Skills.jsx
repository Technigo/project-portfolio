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
            <p className="skills-p">React</p>
            <p className="skills-p">Node.js</p>
            <p className="skills-p">Express</p>
          </div>

          <div className="text-box">
            <h2 className="skill-headline toolbox-headline">Toolbox</h2>
            <p className="skills-p">MongoDB</p>
            <p className="skills-p">Netlify</p>
            <p className="skills-p">Render</p>
            <p className="skills-p">APIs</p>
            <p className="skills-p">Github</p>
            <p className="skills-p">Slack</p>
            <p className="skills-p">Figma</p>
          </div>

            <div className="text-box">
            <h2 className="skill-headline more-headline">More</h2>
            <p className="skills-p">Responsive design</p>
            <p className="skills-p">Accessibility</p>
            <p className="skills-p">Mob-programming</p>
            <p className="skills-p">Trilingual</p>
          </div>

          <div className="text-box">
            <h2 className="skill-headline upcoming-headline">Upcoming</h2>
            <p className="skills-p">PHP</p>
          </div>

        </div>
      </div>
    </section>
  );
};
