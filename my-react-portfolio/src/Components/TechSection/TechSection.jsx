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
            HTML, CSS, JavaScript, React, Node.js, APIs, Mongo DB, Web
            Accessibility, mob and paired programming, GitHub, WordPress
          </p>
        </div>
      </div>
    </>
  );
};
