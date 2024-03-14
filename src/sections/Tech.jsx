import styles from "../styling/tech.module.css";
import data from "../translations/en.json";

export const Tech = () => {
  return (
    <div className={styles.tech_container} aria-label="Tech Section">
      <div className={styles.tech_content} aria-label="Tech Content">
        {data.tech.map((word) => (
          <p key={word}>{word}</p>
        ))}
      </div>
    </div>
  );
};
