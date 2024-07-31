import { Image } from '../projectImage/Image';
import './Introduction.css'
import arrow from '../../otherImages/arrowdown.svg'
import { ProfilePhoto } from '../profilePhoto/ProfilePhoto';

export const Introduction = () => {
  return (
    <>
      <section className="intro-wrapper" aria-label="A page of introduction">
        <ProfilePhoto className={"dev-photo"} />
        <div className="intro-box">
          <h1 className="dev-name">Hi, I&apos;m Trista Shan</h1>
          <h2 className="dev-title">Frontend Developer</h2>
        </div>
        <article className="dev-intro">
          I&apos;m a developer with a healthcare background, driven by a passion
          for overcoming challenges and appreciating the beauty of nature&apos;s
          colorful creations.
        </article>
        <Image
          image={arrow}
          alt="an arrow to show the next page"
          className={"arrow"}
        />
      </section>
    </>
  );
};