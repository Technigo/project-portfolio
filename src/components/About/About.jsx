import { Profile } from "../Images/Images";
import { ScrollDown } from "../ScrollButtons/ScrollButtons";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutHeaderContainer}>
        <p className={styles.myName}>Hi! I am Mai Kanetaka</p>
        <h1 className={styles.frontend}>Frontend Developer</h1>
      </div>
      <div className={styles.aboutDescription}>
        <Profile />
        <div className={styles.aboutDescriptionText}>
          <p>
            As a marketing professional with a deep fascination for storytelling
            and SEO efficacy, my expertise lies in creating captivating content
            and dynamic visuals.
          </p>
          <p>
            Advancing in the digital landscape through specialized study in
            Frontend Development, focusing on JavaScript and React, is a current
            priority.
          </p>
          <p>
            My ambition is to blend my array of skills in content generation,
            marketing strategy, and technical innovation, striving to offer
            strategic and inventive input to cutting-edge tech projects.
          </p>
        </div>
      </div>
      <ScrollDown scrollTo="tech" />
    </section>
  );
};
