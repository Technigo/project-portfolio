import { Image } from '../projectImage/Image';
import './Introduction.css'
import profilePhoto from '../../otherImages/profilePhoto.jpg'
import arrow from '../../otherImages/arrowdown.svg'


export const Introduction = () => {

    return (
      <>
        <div className="intro-page">
          <div className="content">
            <p className="dev-name">Hi, I&apos;m Trista Shan</p>
            <p className="dev-title">Fronted Developer</p>
            <div className="imageAndIntro">
              <img
                className="profilePhoto"
                src={profilePhoto}
                alt="developer's photo"
              />
              <article className="dev-intro">
                I am a frontend developer with a background in healthcare. I
                have a passion for learning new skills and being creative. I
                enjoy taking on challenges because I believe they help me grow
                and become stronger. My hospital experience taught me how to
                handle stress and pay attention to detail. I particularly enjoy
                working in teams and creating things together. To me, coding is
                like magic and it&apos;s incredibly fun.
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
}

//The arrow doesn't work in this situation, need to be condition