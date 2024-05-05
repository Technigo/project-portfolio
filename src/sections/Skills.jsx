import { Headline } from "../components/Headline/Headline";
import { SkillList } from "../components/SkillList";
import "./Skills.css";

export const Skills = () => {
  const codeSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "GitHub",
    "React Router"
  ];

  const toolboxSkills = ["Figma", "Slack", "Lighthouse"];

  const upcomingSkills = ["Mongo DB", "Express"];

  const moreSkills = [
    "Agile methodology",
    "Mob-programming",
    "Pair-programming",
    "Translation",
    "Chinese (Mandarin)",
  ];

  return (
    <section className="skills-section">
      <Headline headlineStyle="section-headline" headline="Skills" />
      <SkillList skillDiv="code" skillTitle="Code" skills={codeSkills} />
      <SkillList
        skillDiv="toolbox"
        skillTitle="Toolbox"
        skills={toolboxSkills}
      />
      <SkillList
        skillDiv="upcoming"
        skillTitle="Upcoming"
        skills={upcomingSkills}
      />
      <SkillList skillDiv="more" skillTitle="More" skills={moreSkills} />
    </section>
  );
};
