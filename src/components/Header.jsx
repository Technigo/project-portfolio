import profilePic from "../assets/profile_pic.jpg"
import styles from "./Header.module.css"
import { BtnArrow } from "./buttons/Buttons"

export const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <img className={styles.profilepic} src={profilePic} alt="profile-picuture"/>
        <div>
          <h2>Hi, I'm Arnau Vidal</h2>
          <h1>Frontend Developer</h1>
        </div>
        <p>I'm a dynamic and ambitious frontend developer. Proficient in modern 
          JavaScript GPT and React, fueled by a relentless pursuit of knowledge and growth. 
          With fluency in four languages and a background in architecture, can bring a unique
          blend of creativity and technical expertise to every project.
        </p>
      </div>
      <BtnArrow />
    </div>
  )
}