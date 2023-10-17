import { useEffect, useState } from "react";
import styles from "./MultiLanguageButton.module.scss";
function MultiLanguageButton({ lang, onLang }) {
  const [currentPosition, setCurrentPosition] = useState({});

  function handleClick(e) {
    onLang(e.target.id);
  }

  useEffect(() => {
    if (lang === "en") setCurrentPosition({ transform: "translateX(4px)" });
    if (lang === "ja") setCurrentPosition({ transform: "translateX(-38px)" });
  }, [lang]);

  return (
    <div className={styles.btn_box}>
      <div className={styles.country_box}>
        <span>🇯🇵</span>
        <span>🇬🇧</span>
      </div>
      <div
        className={styles.outer_btn}
        aria-description="Choose a language to read, in Japanese or English."
      >
        <span className={styles.circle} style={currentPosition}></span>
        <button
          className={styles.inner_btn}
          id="ja"
          onClick={handleClick}
          aria-label="日本語で読む"
          lang="ja"
        ></button>
        <button
          className={styles.inner_btn}
          id="en"
          onClick={handleClick}
          aria-label="Read in English"
        ></button>
      </div>
    </div>
  );
}

export default MultiLanguageButton;
