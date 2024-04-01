import styles from "./Contact.module.css";
import Lottie from "lottie-react";
import toTop from "../animation/to-top.json";
import Avatar from "./Avatar";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.descr}>
        <h2 className={styles.title}>Let&apos;s work together</h2>
      </div>
      <div name="contact form" className={styles.info}>
        <Avatar />
        <p className={styles.name}>Wen Zhao</p>
        <p className={styles.email}>wendy.w.zhao@outlook.com</p>
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
      </div>
      <Lottie
        animationData={toTop}
        loop={true}
        className={styles.toTop}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        title="Back to top"
      />
    </section>
  );
};

export default Contact;
