import { useState } from "react";
import styles from "./Button.module.scss";

export default function Button({
  children,
  iconPath,
  url = "",
  background = "#f5f5f5",
  hoverColor = "",
  onclick = null,
  borderColor = "",
  altText = "",
}) {
  // using state to change btn background
  const [color, setColor] = useState(background);
  const [iconColor, setIconColor] = useState(false);

  const ButtonElm = url ? "a" : "button";

  return (
    <>
      <ButtonElm
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        style={{ backgroundColor: color }}
        onClick={onclick}
        onMouseEnter={() => {
          setColor(hoverColor);
          setIconColor(true);
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
          alt={altText}
        />

        <p className={styles.text} style={{ color: iconColor ? "#fff" : "#333" }}>
          {children}
        </p>
      </ButtonElm>
    </>
  );
}
