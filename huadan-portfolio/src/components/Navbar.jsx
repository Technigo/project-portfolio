import { Link } from "react-scroll";
import "../asserts/css/navbar.css";
import { About } from "../components/About";

export const Navbar = () => {
  return (
    <>
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="tech">
                TECH
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="skills">
                SKILLS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="mywords">
                MY WORDS
              </Link>
            </li>

            <li>
              <Link activeClass="active" smooth spy to="contact">
                LES'S TALK
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="about">
        <About />
      </section>
      <section id="tech">TECH</section>
      <section id="projects">PROJECTS</section>
      <section id="skills">SKILLS</section>
      <section id="mywords">MY WORDS</section>
      <section id="contact">LES'S TALK</section>
    </>
  );
};
