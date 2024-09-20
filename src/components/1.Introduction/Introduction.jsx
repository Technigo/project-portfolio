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
          By combining my UX design background with front-end development, I
          ensure that every interface I build is not only visually appealing but
          also highly functional, accessible, and user-friendly.
        </p>
      </section>
      <section className="arrow-container">
        <img src={arrowImage} alt="Animated arrow" className="arrow" />
      </section>
    </div>
  )
}
