import { Link } from "react-scroll";
import styles from "../styling/navbar.module.css";
import { About } from "./About";
import { Tech } from "../sections/Tech";
import { Skill } from "../sections/Skill";
import { Myword } from "./Myword";
import { Contact } from "./Contact";
import { Projects } from "./Projects";

export const Navbar = () => {
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
                ABOUT
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
                PROJECTS
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
                SKILLS
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
                MY WORDS
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
                LES'S TALK
              </Link>
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
