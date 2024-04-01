import styles from "./Tech.module.css";

export const Tech = () => {
  return (
    <section id="tech" className={styles.section}>
        <h2>Tech</h2>
        <p className={styles.techList}>
          HTML, CSS, JavaScript, React, Node.js, Mongo DB, APIs, Web
          Accessibility
        </p>
    </section>
  );
};
