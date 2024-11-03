// Skills.jsx

import { SkillsCategory } from "./SkillsCategory/SkillsCategory";
import { skills } from "../../skills.json";
import "./Skills.css"

export const Skills = () => {
  return (
    <section className="skills-container">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <SkillsCategory
            key={index}
            type={skill.type}
            list={skill.list}
          />
        ))}
      </div>
    </section>
  );
};
