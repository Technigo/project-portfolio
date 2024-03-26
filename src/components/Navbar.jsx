import styles from "./Navbar.module.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Website Logo" className={styles.logo}></img>
      <ul className={styles.navList}>
        <li>
          <a
            className={styles.navItem}
            href="#"
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
            aria-label="Go to My Words section"
          >
            My words
          </a>
        </li>
        <li>
          <a
            className={styles.navItem}
            href="#"
            aria-label="Go to Let's talk section"
          >
            Let&apos;s talk
          </a>
        </li>
        <li>
          <a className={styles.navItem} href="#">
            Language
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
