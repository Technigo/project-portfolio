import profilePic from "../assets/profile_pic.jpg"
import styles from "./Header.module.css"
import { BtnArrow } from "./buttons/Buttons"

export const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <img className="profile-pic picMobile" src={profilePic} alt="profile-picuture"/>
        <div>
          <h2>Hi, I'm Arnau Vidal 👋</h2>
          <h1 className={styles.profession}>Frontend Developer</h1>
        </div>
        <div className="flex-row">
          <img className="profile-pic picOthers" src={profilePic} alt="profile-picuture"/>
          <p>I'm a dynamic and ambitious junior frontend developer. Fluent in modern 
            JavaScript and React, fueled by a hunger for knowledge and growth. 
            With fluency in four languages and a background in architecture, I can bring a unique
            blend of creativity and technical expertise to every project.
          </p>
        </div>
      </div>
      <BtnArrow />
    </div>
  )
}