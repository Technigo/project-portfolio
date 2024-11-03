import { Heading } from "../ui/Heading";
import skillsData from "../data/skills.json";
import "./Skills.css";

export const Skills = () => {
  return (
    <section className="skills-section">
      <Heading heading="Skills" level={2} className="skills-heading" />
      <div className="skills-list">
        {skillsData.skills.map((skillItem, index) => (
          <div key={index} className="skill-item">
            <button className="skills-tag-button">
              {skillItem.skill}
            </button>
            <ul className="sub-skills">
              {skillItem.subSkills.map((subSkill, subIndex) => (
                <li key={subIndex}>{subSkill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};