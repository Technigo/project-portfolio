import skills from "./skills.json";

export const SkillsList = () => {
  return (
    <>
      {/* Map through skill categories and render each as an article */}
      {skills.map((skillCategory) => (
        <div key={skillCategory.name}>
          <h3 className="{skillCategory.name}">{skillCategory.name}</h3>
          <ul className="skill-list">
            {/* Map through the skillset of the category and render each skill as a list item */}
            {skillCategory.skillset.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
