import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <div className={styles.skillsSection}>
      <h1>Skills</h1>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsBox}>
          <ul>
            <h2>
              <span style={{ backgroundColor: "#ff4575" }}>Code</span>
            </h2>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>GitHub</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className={styles.skillsBox}>
          <ul>
            <h2>
              <span style={{ backgroundColor: "#2483e0", color: "white" }}>
                Toolbox
              </span>
            </h2>
            <li>Microsoft Office</li>
            <li>Gimp</li>
            <li>Slack</li>
            <li>Seesaw + ClassDojo </li>
            <li>Stack OVerflow</li>
            <li>Figma</li>
            <li>Postman</li>
          </ul>
        </div>
        <div className={styles.skillsBox}>
          <ul>
            <h2>
              <span style={{ backgroundColor: "#6db486", color: "white" }}>
                Upcoming
              </span>
            </h2>
            <li>Typescript</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className={styles.skillsBox}>
          <ul>
            <h2>
              <span style={{ backgroundColor: "#ffde30", color: "#0b24f5" }}>
                More
              </span>
            </h2>
            <li>ICT Teacher</li>
            <li>Curriculum Design</li>
            <li>Resourceful</li>
            <li>Team player</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
