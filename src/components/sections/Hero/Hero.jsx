import styles from "./Hero.module.scss";

import { Heading } from "../../ui/Heading";
import { primaryColorText } from "../../../styles/styleVariable";
import { MultiLanguageButton } from "../../ui/MultiLanguageButton";
import { heroText } from "../../../statics/heroText";

export default function Hero({ arrowRef, lang, onLang }) {
  // move to tech section by clicking arrow icon
  function handleClick(e) {
    e.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className={styles.hero_section}>
      <div className={styles.multiLang_box}>
        <MultiLanguageButton lang={lang} onLang={onLang} />
      </div>
      <div className={styles.inner_hero}>
        <div className={styles.heading_box}>
          <h1>Hi, I'm Sakura Tanaka</h1>
          <Heading color={primaryColorText} alignStart="start">
            Frontend Developer
          </Heading>
        </div>

        <img src="/images/sakura.jpeg" className={styles.my_image} alt="Image of Sakura Tanaka" />

        <p className={styles.text} lang={lang}>
          {heroText[lang]}
        </p>
        <button className={styles.arrow} onClick={() => handleClick(arrowRef)}>
          <img src="/icons/arrow.svg" alt=" go the next section" />
        </button>
      </div>
    </section>
  );
}
