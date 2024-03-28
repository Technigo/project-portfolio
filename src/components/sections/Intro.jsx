import { HiArrowDown } from "react-icons/hi"
import { ProfilePicture } from "../reusable/ProfilePicture"
import "./Intro.css"

export const Intro = () => {
  const scrollToTechSection = () => {
    const techSection = document.getElementById("tech-section")
    techSection.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="intro">
      <div className="intro-container">
        <div className="profilepic-container">
          <ProfilePicture />
        </div>
        <div className="intro-text">
          <h3>Hi, I'm Alma Herrström</h3>
          <h1>Frontend Developer</h1>
          <p className="hind">
            I'm merging my background in financial audit with a passion for web
            development. Currently in a fast-paced web development boot camp
            learning tools like JavaScript, React, Redux and Node.js, I'm
            blending my attention to detail and problem-solving skills to create
            user-friendly digital experiences.
          </p>
        </div>
      </div>
      <a onClick={scrollToTechSection}>
        <HiArrowDown className="arrow-down" />
      </a>
    </div>
  )
}
