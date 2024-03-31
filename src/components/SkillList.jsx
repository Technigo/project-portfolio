import styles from "./SkillList.module.css";

const SkillList = ({ skillList }) => {
  return (
    <ul className={styles.skillType}>
      <p className={styles.title}>{skillList.name}</p>
      {skillList.list.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};

export default SkillList;
