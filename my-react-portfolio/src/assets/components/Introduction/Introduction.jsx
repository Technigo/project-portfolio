import { Image } from '../projectImage/Image';
import './Introduction.css'
import arrow from '../../otherImages/arrowdown.svg'
import { ProfilePhoto } from '../profilePhoto/ProfilePhoto';

export const Introduction = () => {
  return (
    <>
      <div className="intro-page" aria-label="A page of introduction">
        <div className="content">
          <p className="dev-name">Hi, I&apos;m Trista Shan</p>
          <p className="dev-title">Fronted Developer</p>
          <div className="imageAndIntro">
            <ProfilePhoto />
            <article className="dev-intro">
              with a background in healthcare, passionate
              about challenges, flowers and all the colourful creations🎨
              <br />
              I&apos;m someone who thrives on challenges and embraces new
              experiences. From my
              background in healthcare, I&apos;ve honed valuable skills such as
              communication, resilience and attention to detail, which I now
              apply to my coding endeavours. <br/>
              Collaborating within teams and solving complex problems energies
              me, and I find immense joy in the transformative power of coding.
              Each line of code represents a new possibility, and I&apos;m
              passionate about leveraging this tool to unleash creativity and
              drive positive change🌻
            </article>
          </div>
        </div>
        <section className="arrow-contaner">
          <Image
            image={arrow}
            alt="an arrow to show the next page"
            className={"arrow"}
          />
        </section>
      </div>
    </>
  );
};