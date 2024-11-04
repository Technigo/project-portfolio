import { H2 } from "../../ui/Typography/Typography.jsx"; // Import H2 for the section title
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
              <li className="skills-list">{skill.tags}</li>
            ) : (
              skill.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))
            )}
          </ul>
        </div>
      ))}
    </section>
  );
};
