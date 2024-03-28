import styles from "./Skills.module.css";
import { skills } from "../skills.json";
import SkillList from "./SkillList";

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.descr}>
        <h2 className={styles.title}>Skills</h2>
        <p className={styles.subtitle}>Skills I master and keep sharpening</p>
      </div>
      <div className={styles.skillset}>
        {skills.map((skillset, index) => (
          <SkillList key={index} skillList={skillset} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
