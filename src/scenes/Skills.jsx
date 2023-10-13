import "./skills.css";
import { skills } from "../Data";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="page-wrapper">
        <div className="page-container bg-page-container">
          <h2 className="page-title">Skills</h2>
          {skills.map((skill) => (
            <div className="skills-list" key={skill.id}>
              <div
                className="category-title"
                style={{ backgroundColor: skill.bg_color }}
              >
                <h3 className="titles">{skill.category} </h3>
              </div>
              <ul className="text-css">
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
