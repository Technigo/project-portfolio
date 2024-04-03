import styles from "./SkillsSection.module.css"

export const SkillsSection = () => {
  return (
    <div className={styles.skillsSectionContainer}>
      <h1 className="section-title">Skills</h1>
      <div className={styles.skillsContainer}>
        <div className={styles.skillSetContainer}>
          <h2 className={styles.red}>Code</h2>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Javascript ES6</p>
          <p>React</p>
          <p>Styled Components</p>
          <p>GitHub</p>
        </div>
        <div className={styles.skillSetContainer}>
          <h2 className={styles.blue}>Toolbox</h2>
          <p>Visual Studio Code</p>
          <p>Postman</p>
          <p>Adobe Photoshop</p>
          <p>Adobe Illustrator</p>
          <p>Figma</p>
          <p>3D tools</p>
          <p>2D tools</p>
        </div>
        <div className={styles.skillSetContainer}>
          <h2 className={styles.green}>Upcoming</h2>
          <p>Node.js</p>
        </div>
        <div className={styles.skillSetContainer}>
          <h2 className={styles.yellow}>More</h2>
          <p>architecture degree </p>
          <p>+2 years working as a supervisor</p>
          <p>+10 years working experience:</p>
          <p>in large projects</p>
          <p>in collaboration</p>
          <p>in high paste</p>
          <p>in process design</p>
          <p>in concept development</p>
          <p>in planning and deliverys</p>
        </div>
      </div>
    </div>
  )
}