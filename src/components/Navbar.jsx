import styles from "./Navbar.module.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Website Logo" className={styles.logo}></img>
      <ul className={styles.navList}>
        <li className={styles.navItem}>About</li>
        <li className={styles.navItem}>Projects</li>
        <li className={styles.navItem}>My words</li>
        <li className={styles.navItem}>Let&apos;s talk</li>
        <li className={styles.navItem}>Language</li>
      </ul>
    </nav>
  );
};

export default Navbar;
