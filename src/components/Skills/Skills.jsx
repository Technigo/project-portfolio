import { SkillList } from "./SkillList"
import skillsetsData from "./skills.json";
import { ScrollDown } from "../ScrollButtons/ScrollButtons";
import styles from "./Skills.module.css";

const { skillsets } = skillsetsData;

export const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
        <h2>Skills</h2>
      <div className={styles.skillsContainer}>
        {skillsets.map((skillset) => (
          <SkillList
            key={skillset.name}
            name={skillset.name}
            skills={skillset.skills}
          />
        ))}
      </div>
      <ScrollDown scrollTo="contact" />
    </section>
  );
};