import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p aria-hidden="true" className={styles.text}>
        {Array.from({ length: 10 }, (_, i) => (
          <> Sakura Tanaka &#x2022; Frontend Developer &#x2022;</>
        ))}
      </p>
    </footer>
  );
}
