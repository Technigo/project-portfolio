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
        <h1 className="introduction-heading">Hi 👋, I&apos;m Lovisa Åberg</h1>
        <h2 className="introduction-subheading">Frontend Developer</h2>
        <p className="introduction-text">
          By integrating my UX design background with front-end development, I
          create functional, accessible, and user-centered interfaces that
          deliver seamless digital experiences.
        </p>
      </section>
      <section className="arrow-container">
        <img src={arrowImage} alt="Animated arrow" className="arrow" />
      </section>
    </div>
  )
}
