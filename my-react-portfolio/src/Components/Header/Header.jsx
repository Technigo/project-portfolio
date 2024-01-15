import { useState } from "react";

import styles from "./Header.module.css";

export const Header = () => {
  const [hideInfo, setHideInfo] = useState(false);

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerBox}>
          <h2>Hi, I'm Beckie Morton</h2>
        </div>
        <div className={styles.headerBox}>
          <h1>Frontend Developer</h1>
        </div>
        <div className={styles.headerBox}>
          <img src="/Assets/profile-bec-sqr.jpg" alt="profile pic of beckie" />
        </div>
        <div className={styles.headerBox}>
          <p>
            Former International School teacher, and Police Officer, turned
            passionate Frontend developer. Beckie has a Master of Teaching as
            well as a Bachelor of Computing, and brings both skills and
            experience to a new career.
          </p>
        </div>
        <div className={styles.headerBox}>
          <div className={styles.mobileLinks}>
            <p>
              <a
                href="https://github.com/BeckieMorton"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="See Beckie's git hub"
              >
                <img alt="git hub icon" src="/Assets/github.png" />
              </a>
              <a
                href="https://www.linkedin.com/in/rebecca-morton-739446204/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="See Beckie's linkedin account"
              >
                <img alt="linkedin icon" src="/Assets/linkedin.png" />
              </a>
              <a
                href="https://stackoverflowteams.com/c/technigo/users/487/?tab=profile"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="See Beckie's stack overflow account"
              >
                <img
                  alt="stack overflow icon"
                  src="/Assets/stackoverflow.png"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
