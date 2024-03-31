import PropTypes from "prop-types";

export const SkillCategory = ({ skillSet }) => {
  return (
    <div className="skill flex-box">
      <h1
        className="skill-title"
        style={{ backgroundColor: skillSet.backGroundColor }}
      >
        {skillSet.title}
      </h1>
      <ul className="skill-items">
        {skillSet.items.map((item) => {
          return (
            <li className="skill-item" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

SkillCategory.propTypes = {
  skillSet: PropTypes.shape({
    backGroundColor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
  }),
};
