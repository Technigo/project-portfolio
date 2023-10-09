import styles from "./Tech.module.scss";
import { whiteColorText } from "../../../styles/styleVariable";
import { Heading } from "../../ui/Heading";
export default function Tech() {
  return (
    <section className={styles.tech_section}>
      <div className={styles.inner_tech}>
        <Heading color={whiteColorText} alignStart="center">
          Tech
        </Heading>
        <p className={styles.text}>
          HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web
          Accessibility, API:s, mob-programming, pair-programming, Github.{" "}
        </p>
      </div>
    </section>
  );
}
