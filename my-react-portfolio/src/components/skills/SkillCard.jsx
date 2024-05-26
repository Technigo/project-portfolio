import { Header } from "../common/Header";
import skills from "./skills.json";
import "./skills.css";

export const SkillCard = () => {
  return (
    <>
      {skills.map((skillCategory) => (
        <article key={skillCategory.name}>
          <div className="skill-box">
            <Header
              level={3}
              text={skillCategory.name}
              className={`skills-subheading subheading-${skillCategory.id}`}
            />
            <ul>
              {skillCategory.skillset.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </>
  );
};
