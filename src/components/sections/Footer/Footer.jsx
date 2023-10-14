import styles from "./Footer.module.scss";
import { secondaryColorText } from "../../../styles/styleVariable";

export default function Footer({ bgColor = secondaryColorText.color }) {
  return (
    <footer className={styles.footer} style={{ backgroundColor: bgColor }}>
      {/* arial hidden is for hiding this text from api */}
      <p aria-hidden="true" className={styles.text}>
        {Array.from({ length: 16 }, (_, i) => (
          <small key={i}>
            {" "}
            Sakura Tanaka &nbsp; &#x2022; &nbsp; Frontend Developer &nbsp; &#x2022; &nbsp;{" "}
          </small>
        ))}
      </p>
    </footer>
  );
}
