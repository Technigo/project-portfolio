import { Image } from '../smallComps/Image'
import './Introduction.css'

export const Introduction = () => {

    return (
      <>
        <div className="intro-page">
          <div className="nameSentance">
            <div>
              <img
                className="profilePhoto"
                src="../../../public/images/profilePicture.JPG"
                alt="developer's photo"
              />
            </div>
            <div className="content">
              <p className="dev-name">
                Hi, I&apos;m Trista Shan
                <br />
                <span className="dev-title">Fronted Developer</span>
              </p>
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
            {/* <h3>INTRODUCTION<br /><span>ABOUT ME</span></h3>  */}
          </div>
          <div className="arrow-contaner">
            <Image
              image ="../../../public/arrow.svg"
              alt="an arrow to show the next page"
              className={"arrow"}
            />
          </div>
        </div>
      </>
    );
}

//The arrow doesn't work in this situation, need to be condition