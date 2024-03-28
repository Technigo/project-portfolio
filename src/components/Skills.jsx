import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.descr}>
        <h2 className={styles.title}>Skills</h2>
        <p className={styles.subtitle}>Skills I master and keep sharpening</p>
      </div>
      <div className={styles.skillset}>
        <ul className={styles.skillType}>
          <h3 className={styles.code}>Code</h3>
          <li>HTML5</li>
        </ul>
        <ul className={styles.skillType}>
          <h3 className={styles.toolbox}>Toolbox</h3>
          <li>VS code</li>
        </ul>
        <ul className={styles.skillType}>
          <h3 className={styles.more}>More</h3>
          <li>Mob/Pair Programming</li>
        </ul>
        <ul className={styles.skillType}>
          <h3 className={styles.upcoming}>Upcoming</h3>
          <li>MongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
