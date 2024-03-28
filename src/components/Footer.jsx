import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© Created by Wen Zhao</p>
      <div className={styles.socialMedia}>
        <a
          href="https://github.com/wwenzz"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="github icon"
          className={styles.link}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/wendywenzhao/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="linkedin icon"
          className={styles.link}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/wendyzhao.630"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="facebook icon"
          className={styles.link}
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/juneyanz/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="instagram icon"
          className={styles.link}
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
