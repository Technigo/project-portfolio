import { PropTypes } from "prop-types";

export const SkillsList = ({ skillsItems, skillsTitle }) => {
  return (
    <>
      <div className="skill-list-title-box">
        <h2>{skillsTitle}</h2>
      </div>
      <ul>
        {skillsItems.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
};

SkillsList.propTypes = {
  skillsItems: PropTypes.array,
  skillsTitle: PropTypes.string,
};
