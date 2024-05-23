import styles from './Hero.module.scss';

import { Heading } from '../../ui/Heading';
import { primaryColorText } from '../../../styles/styleVariable';
import { MultiLanguageButton } from '../../ui/MultiLanguageButton';
import { heroText } from '../../../statics/heroText';
import { ObserverWrapper } from '../../ui/ObserverWrapper';
import Tilt from 'react-parallax-tilt';

export default function Hero({ arrowRef, lang, onLang }) {
  // move to tech section by clicking arrow icon
  function handleClick(e) {
    e.current.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <section className={styles.hero_section}>
      <div className={styles.multiLang_box}>
        <MultiLanguageButton lang={lang} onLang={onLang} />
      </div>
      <ObserverWrapper>
        <Tilt
          className={styles.inner_hero}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={800}
          transitionSpeed={1500}
          scale={1.1}
          gyroscope={true}
        >
          <div className={styles.heading_box}>
            <h1>Hi, I'm Sakura Tanaka</h1>
            <Heading color={primaryColorText} alignStart="start">
              Frontend Developer
            </Heading>
          </div>

          <img src="/images/sakura.webp" className={styles.my_image} alt="Image of Sakura Tanaka" />

          <p
            className={styles.text}
            lang={lang}
            dangerouslySetInnerHTML={{ __html: heroText[lang] }}
          />

          <button className={styles.arrow} onClick={() => handleClick(arrowRef)}>
            <img src="/icons/arrow.svg" alt=" go the next section" />
          </button>
        </Tilt>
      </ObserverWrapper>
    </section>
  );
}
