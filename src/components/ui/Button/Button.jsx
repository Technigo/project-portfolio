import { useState } from "react";
import styles from "./Button.module.scss";
export default function Button({ text, iconPath, url, background = "#f5f5f5", hoverColor }) {
  const [color, setColor] = useState(background);
  const [iconColor, setIconColor] = useState(false);

  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button
          className={styles.button}
          style={{ backgroundColor: color }}
          onMouseEnter={() => {
            setColor(hoverColor);
            console.log("mouse");
            if (text !== "Read Article") setIconColor(true);
          }}
          onMouseLeave={() => {
            setColor(background);
            setIconColor(false);
          }}
        >
          <img
            src={iconPath}
            className={styles.icon}
            style={{ filter: iconColor ? "brightness(10)" : "" }}
          />
          <p className={styles.text} style={{ color: iconColor ? "#fff" : "#333" }}>
            {text}
          </p>
        </button>
      </a>
    </>
  );
}
