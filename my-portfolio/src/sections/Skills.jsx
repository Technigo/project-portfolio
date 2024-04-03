import { Headline } from "../components/Headline.jsx";
import { SkillsList } from "../components/SkillsList.jsx";

export const Skills = () => {
  const codeSkills = ["HTML5", "CSS3", "JavaScript", "React"];

  const toolBox = ["Visual Studio Code", "Postman", "GitHub", "Figma", "Slack"];

  const upcomingSkills = ["Node.js", "MongoDB", "Express.js"];

  return (
    <>
      <div className="wavy-border"></div>
      <div className="skills-container">
        <section className="skills-content-container">
          <Headline style="skills-title" title="Skills" />
          <div className="skill-box">
            <SkillsList skillsItems={codeSkills} skillsTitle="Code" />
          </div>
          <div className="skill-box">
            <SkillsList skillsItems={toolBox} skillsTitle="Toolbox" />
          </div>
          <div className="skill-box">
            <SkillsList skillsItems={upcomingSkills} skillsTitle="Upcoming" />
          </div>
        </section>
      </div>
    </>
  );
};
