import styles from "./TechSection.module.css";

export const TechSection = () => {
  return (
    <>
      <div className={styles.techContainer}>
        <div className={styles.leftBox}>
          <h1>Tech</h1>
        </div>
        <div className={styles.rightBox}>
          <p>
            HTML, CSS, JavaScript, ES6, JSX, React, React Hooks, Node.js,
            Express API, Web Accessibility, APIs, mob-programming,
            pair-programming, GitHub.
          </p>
        </div>
      </div>
    </>
  );
};
