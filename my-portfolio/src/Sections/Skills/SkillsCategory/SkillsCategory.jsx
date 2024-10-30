// SkillsCategory.jsx

import { SkillsList } from "./SkillsList/SkillsList";

export const SkillsCategory = ({ type, list }) => {
  return (
    <>
      <label>
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
    </>
  );
};