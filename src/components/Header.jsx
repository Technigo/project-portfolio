import profilePic from "../assets/profile_pic.jpg"
import styles from "./Header.module.css"
import { BtnArrow } from "./buttons/Buttons"

export const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <img className="profile-pic picMobile" src={profilePic} alt="profile-picuture"/>
        <div>
          <h2>Hi, I'm Arnau Vidal👋</h2>
          <h1 className={styles.profession}>Frontend Developer</h1>
        </div>
        <div className="flex-row">
          <img className="profile-pic picOthers" src={profilePic} alt="profile-picuture"/>
          <p>I'm an ambitious junior web developer on an exciting learning journey. <br></br>
            Trained in modern JavaScript and React with a background in architecture. <br></br>
            I can bring a unique blend of creativity and technical skills.
          </p>
        </div>
      </div>
      <BtnArrow />
    </div>
  )
}