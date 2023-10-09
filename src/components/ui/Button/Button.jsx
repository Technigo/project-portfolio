import styles from "./Button.module.scss";
export default function Button({ text, iconPath, url, background = "#f5f5f5" }) {
  return (
    <>
      <a href={url}>
        <button className={styles.button} style={{ backgroundColor: background }}>
          {" "}
          <img src={iconPath} className={styles.icon} />
          <p className={styles.text}>{text}</p>
        </button>
      </a>
    </>
  );
}
