import styles from "./Heading.module.scss";
export default function Heading({ headingText, color }) {
  return (
    <h2 className={styles.text} style={{ color: `${color}` }}>
      Heading
    </h2>
  );
}
