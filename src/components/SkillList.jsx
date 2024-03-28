import styles from "./SkillList.module.css";

const SkillList = ({ skillList }) => {
  return (
    <ul className={styles.skillType}>
      <h3>{skillList.name}</h3>
      {skillList.list.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};

export default SkillList;
