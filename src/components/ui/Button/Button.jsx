import styles from "./Button.module.scss";
export default function Button({ text, iconPath, url }) {
  return (
    <>
      <a href={url}>
        <button className={styles.button}>
          {" "}
          <img src={iconPath} className={styles.icon} />
          <p className={styles.text}>{text}</p>
        </button>
      </a>
    </>
  );
}
