import styles from "./Heading.module.scss";
export default function Heading({ children, color, alignStart = "start" }) {
  // change align style when it needs to be in center by pasing alignStart="center"
  const textStyle = color.color;
  return (
    <h2 className={styles.text} style={{ color: textStyle, textAlign: alignStart }}>
      {children}
    </h2>
  );
}
