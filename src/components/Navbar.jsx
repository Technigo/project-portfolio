import { Link } from "react-scroll";
import "./styleComponents/navbar.css";
import { About } from "../components/About";
import { Tech } from "../components/Tech";
import { Skill } from "../components/Skill";
import { Myword } from "../components/Myword";
import { Contact } from "../components/Contact";
import { Projects } from "./Projects";

export const Navbar = () => {
  return (
    <>
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link
                activeClass="active"
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
                activeClass="active"
                smooth
                spy
                to="tech"
                aria-label="Navigate to Tech section"
              >
                TECH
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
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
                activeClass="active"
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
                activeClass="active"
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
                activeClass="active"
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
      <section id="about">
        <About />
      </section>
      <section id="tech">
        <Tech />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="mywords">
        <Myword />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};
