import styles from "./Title.module.scss";
export default function Title({ text }) {
  return <h3 className={styles.title}>{text}</h3>;
}
