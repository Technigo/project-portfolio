import { SkillsList } from "./SkillsList";
import "./Skills.css";

export const Skills = () => {
  return (
    <section className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-wrapper">
        <SkillsList />
      </div>
    </section>
  );
};
