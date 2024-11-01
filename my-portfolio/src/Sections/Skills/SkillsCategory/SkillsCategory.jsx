// SkillsCategory.jsx

import { SkillsList } from "./SkillsList/SkillsList";
import "./SkillsCategory.css";

export const SkillsCategory = ({ type, list }) => {
  return (
    <label className="skill-category">
      <h3>{type}</h3>
      <ul>
        {list.map((skillItem, index) => (
          <SkillsList
            key={index}
            skillItem={skillItem}
          />
        ))}
      </ul>
    </label>

  );
};
