import PropTypes from "prop-types";

export const SkillList = ({ name, skills }) => {
  return (
    <>
      <h3>{name}</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
};

SkillList.propTypes = {
  name: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};
