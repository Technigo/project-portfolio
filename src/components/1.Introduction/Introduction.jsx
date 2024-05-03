import "./Introduction.css"
import arrowImage from "../../assets/arrow.svg"
import profilePicture from "../../assets/profile-picture.png"

export const Introduction = () => {
  return (
    <div className="introduction-container">
      <section className="introduction">
        <img
          src={profilePicture}
          alt="Profile picture"
          className="profile-pic"
        />
        <h1 className="introduction-heading">Hi, I&apos;m Lovisa Åberg</h1>
        <h2 className="introduction-subheading">Frontend Developer</h2>
        <p className="introduction-text">
          I’m a Front end developer with a background in UX Design, and I want
          to create great, accessible apps and websites with people in focus.
        </p>
      </section>
      <section className="arrow-container">
        <img src={arrowImage} alt="Animated arrow" className="arrow" />
      </section>
    </div>
  )
}
