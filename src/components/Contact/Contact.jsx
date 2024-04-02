import { Profile } from "../Images/Images";
import { IconMappings } from "../IconMappings";
import { ScrollUp } from "../ScrollButtons/ScrollButtons";
import styles from "./Contact.module.css";

export const Contact = () => {
  const GmailIcon = IconMappings.Gmail;
  const LinkedinIcon = IconMappings.Linkedin;
  const GitHubIcon = IconMappings.GitHub;
  const InstagramIcon = IconMappings.Instagram;
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactHeader}>
        <h2>Contact</h2>
        <p>For more details, contact me!</p>
      </div>
      <div className={styles.profileContainer}>
        <Profile />
      </div>
      <div className={styles.contactInfo}>
        <h3>Mai Kanetaka</h3>
        <div className={styles.socialLinks}>
          <a
            href="mailto:maikanetaka@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactIcon}
          >
            <GmailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/maikanetaka/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactIcon}
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/maikanetaka"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactIcon}
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.instagram.com/kirbygram_official/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactIcon}
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className={styles.scrollUpContainer}>
        <ScrollUp />
      </div>
    </section>
  );
};
