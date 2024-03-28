import Skills from "../assets/Skills.json";
import { SkillCategory } from "./SkillCategory";

export const SkillPage = () => {
  const getSkills = () => {
    return Skills.skills.map((skill) => (
      <SkillCategory key={skill.title} skillSet={skill} />
    ));
  };
  return <div>{getSkills()}</div>;
};
