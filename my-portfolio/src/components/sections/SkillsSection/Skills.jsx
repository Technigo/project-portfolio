import { H2, BodyTextMedium } from "../../ui/Typography/Typography.jsx"; // Import H2 for the section title
import skillsData from "../../../data/skills.json"; // Adjust the path to your JSON file
import "./Skills.css";
import { Grid } from "../../ui/GridLayout/Grid.jsx";
import { Tag } from "../../ui/Tags/Tags.jsx";

export const Skills = () => {
  return (
    <section className="skill-section">
      <H2>Skills</H2>
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
    </section>
  );
};
