import { useState, useEffect } from "react";

import styles from "./LetsTalk.module.css";

export const LetsTalk = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 10 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.talkContainer}>
      <h1>Let's Talk</h1>
      <img src="./assets/profile-bec-sqr.jpg" alt="profile pic of beckie" />
      <div className={styles.talkTxt}>
        <h2>Beckie Morton</h2>
        <h2>beckam11@gmail.com</h2>
      </div>
      <div className={styles.icons}>
        <p>
          <a
            href="https://github.com/BeckieMorton"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="See Beckie's github"
          >
            <img className={styles.github} src="./assets/github.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/rebecca-morton-739446204/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="See Beckie's LinkedIn"
          >
            <img className={styles.linked} src="./assets/linkedin.png" />
          </a>
          <a
            href="https://stackoverflowteams.com/c/technigo/users/487/?tab=profile"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="See Beckie's StackOverflow"
          >
            <img className={styles.stack} src="./assets/stackoverflow.png" />
          </a>
        </p>
      </div>
      {showButton && (
        <div className={styles.scrollToTop}>
          <button className={styles.scrollButton} onClick={handleScrollToTop}>
            <img src="./assets/scrollup.png" alt="scroll up icon" />
          </button>
        </div>
      )}
    </div>
  );
};
