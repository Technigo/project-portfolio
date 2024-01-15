import styles from "./MyWords.module.css";

export const MyWords = () => {
  return (
    <div className={styles.wordsContainer}>
      <h1>My Words</h1>
      <div className={styles.wordsBox}>
        <img src="./assets/mywords.jpg" alt="image placer for my words" />
      </div>
      <div className={styles.wordsBox}>
        <p>
          <span style={{ backgroundColor: "black", color: "white" }}>
            &nbsp;December 2023&nbsp;
          </span>
        </p>

        <h2>
          Transitioning into Web Development: Navigating 2023 with My
          20-Year-Old Computer Science Degree.
        </h2>

        <p>
          I have almost completed my Technigo Web Development bootcamp, and
          guess what? My 20-year-old computer science degree is proving to be a
          pretty handy guide through the twists and turns of building web
          applications....
        </p>
        <a href="https://www.linkedin.com/pulse/transitioning-web-development-navigating-2023-my-computer-morton-4d4de%3FtrackingId=s2H8u0ibRZ%252BwYg1HlsOq1w%253D%253D/?trackingId=s2H8u0ibRZ%2BwYg1HlsOq1w%3D%3D">
          <img
            className={styles.articleButton}
            src="./assets/Read-On-Medium.png"
            alt="read article"
          />
        </a>
      </div>
    </div>
  );
};
