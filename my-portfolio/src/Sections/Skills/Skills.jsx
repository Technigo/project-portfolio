// Skills.jsx

import { SkillsCategory } from "./SkillsCategory/SkillsCategory";
import { skills } from "../../skills.json";


export const Skills = () => {
  return (

    <>
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <SkillsCategory
          key={index}
          type={skill.type}
          list={skill.list}
        />
      ))}



    </>
  );
};