import { PropTypes } from "prop-types";

export const SkillsList = ({ skillsItems, skillsTitle }) => {
  return (
    <div className="skills-text-box">
      <h2>{skillsTitle}</h2>
      <ul>
        {skillsItems.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

SkillsList.propTypes = {
  skillsItems: PropTypes.string,
  skillsTitle: PropTypes.string,
};
