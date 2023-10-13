import styles from "./Label.module.scss";
export default function Label({ labelText }) {
  return (
    <div className={styles.text_box}>
      <p className={styles.text}>{labelText}</p>
    </div>
  );
}
