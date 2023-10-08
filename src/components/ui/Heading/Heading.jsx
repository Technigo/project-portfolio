import { Children } from "react";
import styles from "./Heading.module.scss";
export default function Heading({ children, color }) {
  const textStyle = color.color;
  return (
    <h2 className={styles.text} style={{ color: textStyle }}>
      {children}
    </h2>
  );
}
