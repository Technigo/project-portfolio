import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* arial hidden is for hiding this text from api */}
      <p aria-hidden="true" className={styles.text}>
        {Array.from({ length: 16 }, (_, i) => (
          <small>
            {" "}
            Sakura Tanaka &nbsp; &#x2022; &nbsp; Frontend Developer &nbsp; &#x2022; &nbsp;{" "}
          </small>
        ))}
      </p>
    </footer>
  );
}
