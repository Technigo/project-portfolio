import skillsData from "../../../data/skills.json"; 
import { H2, BodyTextMedium } from "../../ui/Typography/Typography.jsx"; 
import { Tag } from "../../ui/Tags/Tags.jsx";
import "./Skills.css";


export const Skills = () => {
return (
  <section className="skill-section">
    <H2>Skills</H2>
    <div className="skill-wrapper"> 
    {skillsData.skills.map((skill) => (
      <div key={skill.name} className="skill-category">
        <Tag sectionType="skill" text={skill.name} />
        <ul>
          {typeof skill.tags === "string" ? (
            <BodyTextMedium>{skill.tags}</BodyTextMedium>
          ) : (
            skill.tags.map((tag, index) => (
              <BodyTextMedium key={index}>{tag}</BodyTextMedium>
            ))
          )}
        </ul>
      </div>
    ))}
    </div>
  </section>
);
};
