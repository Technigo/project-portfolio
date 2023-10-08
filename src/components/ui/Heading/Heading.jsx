import { Children } from "react";
import styles from "./Heading.module.scss";
export default function Heading({ children, color, alignStart = "center" }) {
  const textStyle = color.color;
  return (
    <h2 className={styles.text} style={{ color: textStyle, textAlign: alignStart }}>
      {children}
    </h2>
  );
}
