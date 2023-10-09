import { Heading } from "../../ui/Heading";
import styles from "./Contact.module.scss";
import { primaryColorText } from "../../../styles/styleVariable";
export default function Contact() {
  return (
    <section className={styles.contact_section}>
      <div className={styles.inner_contact}>
        <Heading alignStart="center" color={primaryColorText}>
          Let's talk!
        </Heading>
        <div className={styles.my_card}>
          <img src="/images/sakura.jpeg" alt="image of Sakura Tanaka" className={styles.my_image} />
          <address className={styles.contact_infos}>
            <h3>Sakura Tanaka</h3>
            <p>
              <a href="tel:+46726664870">+46(0)726664870</a>
            </p>
            <p>
              <a href="mailto:sito6496t@gmail.com">sito6496t@gmail.com</a>
            </p>
          </address>
          <div className={styles.icons_box}>
            <a
              href="https://www.linkedin.com/in/sakura-tanaka-251a36247/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/linkedin.png" className={styles.icon} />
            </a>

            <a
              href="https://github.com/sansan-sakura?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/git-light.png" className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
