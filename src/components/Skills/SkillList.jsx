import PropTypes from "prop-types";
import styles from "./SkillList.module.css";

export const SkillList = ({ name, skills }) => {
  return (
    <div className={styles.skillListContainer}>
      <h3 className={styles.skillListTitle}>{name}</h3>
      <ul className={styles.skillList}>
        {skills.map((skill) => (
          <li key={skill} className={styles.skillListItem}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

SkillList.propTypes = {
  name: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};
