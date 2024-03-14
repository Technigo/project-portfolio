import email from "/icons/email_white.png";
import github from "/icons/github_white.png";
import linkedin from "/icons/linkedin_white.png";
import styles from "../styling/contact.module.css";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This provides a smooth scrolling effect
    });
  };

  return (
    <div className={styles.contact_container} aria-label="Contact Information">
      <h1>{t("footer.title")}</h1>

      <div className={styles.contact_details}>
        <p>Huadan Zhu</p>
        <p>+46(0)762 87 66 74</p>
        <a href="mailto:zhuhuadan@gmail.com">
          <p>{t("footer.email")}</p>
        </a>
      </div>

      <div className={styles.icons}>
        <img src={email} alt="email icon" />
        <img src={github} alt="github icon" />
        <a
          href="https://www.linkedin.com/in/huadan-zhu-802864134/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin icon" />
        </a>
      </div>

      <a href="/images/cv.pdf" download className={styles.cv}>
        {t("footer.cv")}
      </a>
      <button
        type="button"
        onClick={scrollToTop}
        className={styles.back}
        aria-label="Back to Top"
      >
        {t("footer.button")}
      </button>
    </div>
  );
};
