import { Heading } from '../../ui/Heading';
import { whiteColorText } from '../../../styles/styleVariable';

import styles from './Tech.module.scss';
import { ObserverWrapper } from '../../ui/ObserverWrapper';

export default function Tech({ arrowRef }) {
  return (
    <section className={styles.tech_section} ref={arrowRef}>
      <ObserverWrapper>
        <div className={styles.inner_tech}>
          <Heading color={whiteColorText} alignStart="center">
            Tech
          </Heading>
          <p className={styles.text}>
            HTML, CSS, Tailwind CSS, SCSS, JavaScript,<span className={styles.special}> React</span>
            , <span className={styles.second}>Next.js</span>, Astro.js,{' '}
            <span className={styles.special}>TypeScript</span>, PHP, Node.js, Express, Mongo DB,
            Mongoose, SQL, Database, Web Accessibility, Python, C, Three.js, Github.
          </p>
        </div>
      </ObserverWrapper>
    </section>
  );
}
