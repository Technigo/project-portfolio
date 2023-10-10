import { Heading } from "../../ui/Heading";
import { whiteColorText } from "../../../styles/styleVariable";

import styles from "./Tech.module.scss";

export default function Tech({ arrowRef }) {
  return (
    <section className={styles.tech_section} ref={arrowRef}>
      <div className={styles.inner_tech}>
        <Heading color={whiteColorText} alignStart="center">
          Tech
        </Heading>
        <p className={styles.text}>
          HTML, CSS, Tailwind, SCSS, JavaScript, React, Next.js, Astro.js, TypeScript, Node.js,
          Mongo DB, Web Accessibility, Python, C, Github.
        </p>
      </div>
    </section>
  );
}
