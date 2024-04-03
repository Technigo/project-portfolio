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
          <p className="dev-title">Frontend Developer</p>
          <div className="imageAndIntro">
            <ProfilePhoto />
            <article className="dev-intro">
              I&apos;m a developer with a healthcare background, driven by a passion for overcoming challenges and appreciating the beauty of nature&apos;s colorful creations🎨 I find immense joy in the transformative power of coding. To me, each line of code signifies endless possibilities, and I&apos;m dedicated to harnessing this tool to inspire creativity and enact positive change🌻
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