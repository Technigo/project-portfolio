import { Heading } from "../../ui/Heading";
import { primaryColorText } from "../../../styles/styleVariable";
import { ObserverWrapper } from "../../ui/ObserverWrapper";

import styles from "./Contact.module.scss";
export default function Contact() {
  return (
    <ObserverWrapper>
      <section className={styles.contact_section}>
        <div className={styles.inner_contact}>
          <Heading alignStart="center" color={primaryColorText}>
            Let's talk!
          </Heading>
          <div className={styles.my_card}>
            <img
              src="/images/sakura.webp"
              alt="image of Sakura Tanaka"
              className={styles.my_image}
            />
            <address className={styles.contact_infos}>
              <h3>Sakura Tanaka</h3>
              <p>
                <a href="tel:+46726664870" aria-label="Sakura's phone number">
                  +46(0)726664870
                </a>
              </p>
              <p>
                <a href="mailto:sito6496t@gmail.com" aria-label="Sakura's email adress">
                  sito6496t@gmail.com
                </a>
              </p>
            </address>
            <div className={styles.icons_box}>
              <a
                href="https://www.linkedin.com/in/sakura-tanaka-251a36247/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/linkedin.svg"
                  className={styles.icon}
                  alt="Visit Sakura's LinkedIn"
                />
              </a>

              <a
                href="https://github.com/sansan-sakura?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/git.svg" className={styles.icon} alt="Visit Sakura's Github" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </ObserverWrapper>
  );
}
