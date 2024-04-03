import profilePic from "../assets/profile_pic.jpg"
import githubIcon from "../assets/Icon-github.svg"
import IconLinkedin from "../assets/Icon-linkedin.svg"
import IconStackoverflow from "../assets/Icon-stackoverflow.svg"
import styles from "./ContactSection.module.css"

export const ContactSection = () => {
  return (
  <div className={styles.contactSection}>
    <h1 className="section-title">Let's talk</h1>
    <img className={styles.profilepic} src={profilePic} width="150" alt="profile-picuture"/>
    <h2>Arnau Vidal</h2>
    <h2>+46(0)063123345</h2>
    <h2>arnauvidal@gmail.com</h2>
    <div className={styles.contactIcons}>
      <a href="https://github.com/vidalhuix" target="_blank"><img src={githubIcon} alt="github-icon"/></a>  
      <a href="https://www.linkedin.com/in/arnau-vidal-i-huix-4266a940/" target="_blank"><img src={IconLinkedin} alt="icon linkedin" /></a>
      <a href="https://stackoverflowteams.com/c/technigo/users/604/?tab=profile" target="_blank"><img src={IconStackoverflow} alt="icon stackoverflow" /></a>
    </div>
  </div>
  )
}