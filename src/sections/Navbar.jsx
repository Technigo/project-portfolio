import { Link } from "react-scroll";
import styles from "../styling/navbar.module.css";
import { About } from "./About";
import { Tech } from "../sections/Tech";
import { Skill } from "../sections/Skill";
import { Myword } from "./Myword";
import { Contact } from "./Contact";
import { Projects } from "./Projects";
import global from "/icons/global.svg";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav__container__actions}>
          <ul>
            <li>
              <Link
                activeClass={styles.active}
                smooth
                spy
                to="about"
                aria-label="Navigate to About section"
              >
                {t("navbar.0")}
              </Link>
            </li>

            <li>
              <Link
                activeClass={styles.active}
                smooth
                spy
                to="projects"
                aria-label="Navigate to Project section"
              >
                {t("navbar.1")}
              </Link>
            </li>
            <li>
              <Link
                activeClass={styles.active}
                smooth
                spy
                to="skills"
                aria-label="Navigate to Projects section"
              >
                {t("navbar.2")}
              </Link>
            </li>
            <li>
              <Link
                activeClass={styles.active}
                smooth
                spy
                to="mywords"
                aria-label="Navigate to Mywords section"
              >
                {t("navbar.3")}
              </Link>
            </li>

            <li>
              <Link
                activeClass={styles.active}
                smooth
                spy
                to="contact"
                aria-label="Navigate to Contact section"
              >
                {t("navbar.4")}
              </Link>
            </li>
            <li>
              {/* {t("navbar.5")} */}
              <img
                src={global}
                alt="language selection icon"
                className={styles.global}
              />
              <select
                className={styles.language}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="se">Swedish</option>
              </select>
            </li>
          </ul>
        </nav>
      </header>
      <section id="about" className={styles.about}>
        <About />
      </section>
      <section className={styles.tech}>
        <Tech />
      </section>
      <section id="projects" className={styles.projects}>
        <Projects />
      </section>
      <section id="skills" className={styles.skills}>
        <Skill />
      </section>
      <section id="mywords" className={styles.mywords}>
        <Myword />
      </section>
      <section id="contact" className={styles.contact}>
        <Contact />
      </section>
    </>
  );
};
