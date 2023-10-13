import styles from "./Hero.module.scss";

import { Heading } from "../../ui/Heading";
import { primaryColorText } from "../../../styles/styleVariable";

export default function Hero({ arrowRef }) {
  // move to tech section by clicking arrow icon
  function handleClick(e) {
    e.current.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <section className={styles.hero_section}>
      <div className={styles.inner_hero}>
        <div className={styles.heading_box}>
          <h1>Hi, I'm Sakura Tanaka</h1>
          <Heading color={primaryColorText} alignStart="start">
            Frontend Developer
          </Heading>
        </div>

        <img src="/images/sakura.jpeg" className={styles.my_image} alt="Image of Sakura Tanaka" />

        <p className={styles.text}>
          I've transitioned from a French pastry chef to a front-end developer, started to teach
          myself JavaScript, React, Next.js,Astro.js and CSS/SCSS in 2021 and currently enrolle in
          Technigo's Bootcamp to enrich my programming skills. I am passionate about writing clean,
          solid code, learning new things and trying new technologies. I am delving into computer
          science as well 💻
        </p>
        <button className={styles.arrow} onClick={() => handleClick(arrowRef)}>
          <img src="/icons/arrow.svg" alt=" go the next section" />
        </button>
      </div>
    </section>
  );
}
