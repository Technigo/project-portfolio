import styles from "./SkillList.module.css";
import PropTypes from "prop-types";

const SkillList = ({ skillList }) => {
  return (
    <ul className={styles.skillType}>
      <li className={styles.title}>{skillList.name}</li>
      {skillList.list.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};

export default SkillList;

SkillList.propTypes = {
  skillList: PropTypes.object.isRequired,
};
