import skills from "./skills.json";
import { SubTitle } from "../../ReusableComponents/Texts/SubTitle";

// Component for each individual skills list.
export const SkillsList = () => {
  return (
    <>
      {skills.map((skillCategory) => (
        <article key={skillCategory.name}>
          <div className="skill-box">
            <SubTitle
              className={`category-title title-${skillCategory.id}`}
              text={skillCategory.name}
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
