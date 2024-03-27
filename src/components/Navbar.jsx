import styles from "./Navbar.module.css";
import logo from "../assets/logo.svg";
import { SlGlobe } from "react-icons/sl";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Website Logo" className={styles.logo}></img>
      <input type="checkbox" id="toggle" className={styles.toggle} />
      <label htmlFor="toggle" className={styles.hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className={styles.menu}>
        <li>
          <a
            className={styles.navItem}
            href="#about"
            aria-label="Go to About section"
          >
            About
          </a>
        </li>
        <li>
          <a
            className={styles.navItem}
            href="#"
            aria-label="Go to Projects section"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className={styles.navItem}
            href="#"
            aria-label="Go to Thoughts section"
          >
            Thoughts
          </a>
        </li>
        <li>
          <a
            className={styles.navItem}
            href="#"
            aria-label="Go to contact section"
          >
            Contact
          </a>
        </li>
        <li>
          <span className={styles.language}>
            <SlGlobe className={styles.globe} />
            <select className={styles.langOption} defaultValue="en">
              <option value="en">EN</option>
              <option value="sv">SV</option>
            </select>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
