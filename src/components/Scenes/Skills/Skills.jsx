import "./Skills.css";
import { skills } from "../../../Data";

export const Skills = () => {
  return (
    <section id="skills" aria-label="Skills and Competencies">
      <div className="page-wrapper">
        <h2 className="page-title">Skills</h2>
        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill-list" key={skill.id}>
              <h3
                className="category"
                style={{ backgroundColor: skill.bg_color }}
              >
                {skill.category}{" "}
              </h3>
              <ul className="p-text">
                {Array.isArray(skill.items)
                  ? skill.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  : null}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
