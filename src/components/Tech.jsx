import Asset from "./Asset";
import styles from "./Tech.module.css";

const icons = [
  "html",
  "css",
  "javascript",
  "react",
  "npm",
  "nodejs",
  "postman",
  "figma",
  "git",
  "python",
  "vscode",
  "github",
];
const Tech = () => {
  return (
    <section id="tech" className={styles.section}>
      <div className={styles.descr}>
        <h2 className={styles.title}>Tech Stack</h2>
        <p className={styles.subtitle}>
          Technoloies I&apos;ve been working with
        </p>
      </div>
      <div className={styles.techIcons}>
        {icons.map((icon, index) => (
          <Asset
            key={index}
            name={icon}
            // className={styles.icon}
            folder="icons"
            format="svg"
          />
        ))}
      </div>
    </section>
  );
};

export default Tech;
