import Skills from "../assets/Skills.json";
import { SkillCategory } from "./SkillCategory";

export const SkillPage = () => {
  const getSkills = () => {
    return Skills.skills.map((skill) => (
      <SkillCategory key={skill.title} skillSet={skill} />
    ));
  };
  return (
    <div className="skill-page">
      <h1 className="skill-page-title">Skills</h1>
      <div className="skill-page-lists flex-box">{getSkills()}</div>
    </div>
  );
};
