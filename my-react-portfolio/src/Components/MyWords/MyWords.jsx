import styles from "./MyWords.module.css";

export const MyWords = () => {
  return (
    <div className={styles.wordsContainer}>
      <div className={styles.waveLine}>
        <p>&nbsp;</p>
      </div>

      <h1>My Words</h1>
      <div className={styles.wordsBox}>
        <p>
          <img
            className={styles.wordsBoxImageDesktop}
            src="./assets/mywords.jpg"
            alt="image placer for my words"
          />
          <img
            className={styles.wordsBoxImageTablet}
            src="./assets/mywords-tablet.jpg"
            alt="image placer for my words"
          />
        </p>
        <p>
          <span style={{ backgroundColor: "black", color: "white" }}>
            &nbsp;December 2023&nbsp;
          </span>
        </p>

        <h2 className={styles.wordsBoxText}>
          Transitioning into Web Development: Navigating 2023 with My
          20-Year-Old Computer Science Degree.
        </h2>
        <p className={styles.wordsBoxText}>
          My 20-year-old computer science degree is proving to be a pretty handy
          guide through the twists and turns of building web applications....
        </p>
        <div className={styles.iconContainer}>
          <a
            className={styles.readMore}
            href="https://www.linkedin.com/pulse/transitioning-web-development-navigating-2023-my-computer-morton-4d4de%3FtrackingId=s2H8u0ibRZ%252BwYg1HlsOq1w%253D%253D/?trackingId=s2H8u0ibRZ%2BwYg1HlsOq1w%3D%3D"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="See Beckie's LinkedIn article"
          >
            <img src="./assets/readmore.png" alt="read more button" />
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
