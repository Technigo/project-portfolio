import { Headline } from "../components/Headline.jsx";
import { SkillsList } from "../components/SkillsList.jsx";
import "./Skills.css";

export const Skills = () => {
  const codeSkills = ["HTML5", "CSS3", "JavaScript", "React"];

  const toolBox = ["Visual Studio Code", "Postman", "GitHub", "Figma", "Slack"];

  const upcomingSkills = ["Node.js", "MongoDB", "Express.js"];

  const more = ["Customer service", "Problem solver"];

  return (
    <>
      <div className="wavy-border"></div>
      <section className="skills-container">
        <Headline style="skills-title" title="Skills" />
        <div className="skills-mobile-container">
          <div className="skill-box">
            <SkillsList skillsItems={codeSkills} skillsTitle="Code" />
          </div>
          <div className="skill-box">
            <SkillsList skillsItems={toolBox} skillsTitle="Toolbox" />
          </div>

          <div className="skill-box">
            <SkillsList skillsItems={upcomingSkills} skillsTitle="Upcoming" />
          </div>
          <div className="skill-box">
            <SkillsList skillsItems={more} skillsTitle="More" />
          </div>
        </div>

        {/* Layout for smaller tablet, is hidden until required screensize is achieved */}
        <div className="skills-desktop-container">
          <div className="skills-desktop-box">
            <div className="skill-box">
              <SkillsList skillsItems={codeSkills} skillsTitle="Code" />
            </div>
            <div className="skill-box">
              <SkillsList skillsItems={toolBox} skillsTitle="Toolbox" />
            </div>
          </div>

          <div className="skills-desktop-box">
            <div className="skill-box">
              <SkillsList skillsItems={upcomingSkills} skillsTitle="Upcoming" />
            </div>
            <div className="skill-box">
              <SkillsList skillsItems={more} skillsTitle="More" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
