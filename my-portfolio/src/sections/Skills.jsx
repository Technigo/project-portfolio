import { Headline } from "../components/Headline.jsx";
import { SkillsList } from "../components/SkillsList.jsx";

export const Skills = () => {
  const codeSkills = ["HTML5", "CSS3", "JavaScript", "React"];

  const toolBox = ["Visual Studio Code", "Postman", "GitHub", "Figma", "Slack"];

  const upcomingSkills = ["Node.js"];

  return (
    <section className="skills-container">
      <Headline style="skills-title" title="Skills" />
      <div className="skill-boxes">
        <SkillsList skillsItems={codeSkills} skillsTitle="Code" />
        <SkillsList skillsItems={toolBox} skillsTitle="Toolbox" />
        <SkillsList skillsItems={upcomingSkills} skillsTitle="Upcoming" />
      </div>
    </section>
  );
};
