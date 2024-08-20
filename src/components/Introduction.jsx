import arrow from "../assets/arrow.svg"
import profilePicture from "../assets/CV-bild.jpg"
import "./Introduction.css"

export const Introduction = () => {
  return (
    <div className="section" id="intro-section">
      <div className="card">
        <img
          src={profilePicture}
          alt="Picture of Erika"
          className="profile-picture"
          id="top-intro-picture"
        />
        <div id="greeting-box">
          <h2 id="greeting">Hi, I&apos;m Erika Wernbro</h2>
          <h1 id="intro-heading">Frontend Developer</h1>
        </div>
        <div className="profile-box">
          <img
            src={profilePicture}
            alt="Picture of Erika"
            className="profile-picture"
            id="intro-picture"
          />
          <p>
            I am a frontend developer with a background in teaching. I&apos;m
            passionate about combining creativity, and organizational skills, to
            make information more available and creating engaging, user-friendly
            digital experiences. My creativity and aptitude for learning new
            skills makes me confident in my ability to contribute to the success of any organization seeking a dedicated and talented frontend developer!
          </p>
        </div>
      </div>
      <div className="arrow-box card">
        <img className="arrow" src={arrow} alt="down arrow" />
      </div>
    </div>
  )
}