import skills from "../../data/skills.json";
import "./SkillLists.css";

const SkillLists = () => {
  return (
    <section className="skill-lists section-spacing-vertical section-spacing-horizontal">
      <div className="grid-container">
        {skills.categories.map((skillCategory, index) => (
          <div key={index} className="col-3">
            <div>
              <h3
                className="skill-lists-heading section-heading"
                id={`skill-list-title-${index}`}
              >
                {skillCategory.name}
              </h3>
              <ul
                aria-labelledby={`skill-list-title-${index}`}
                className="skill-list"
              >
                {skillCategory.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillLists;
