import "./ContactInfo.css"
import profilePicture from "../assets/CV-bild.jpg"
import linkedIn from "../assets/linkedin.svg"
import githubSmall from "../assets/github-small.svg"
import stackOverflow from "../assets/stackoverflow.svg"
import instagram from "../assets/instagram.svg"
import blueSky from "../assets/bluesky.png"


export const ContactInfo = () => {
  return (
    <div className="contact-info-section">
      <h1>Let&apos;s talk</h1>
      <div className="contact-info-card">
        <img
          src={profilePicture}
          alt="Picture of Erika"
          className="profile-picture"
        />
        <div className="contact-info-box">
          <p>Erika Wernbro</p>
          <p>+46(0)76 242 42 42</p>
          <p>erikaellerekki@gmail.com</p>
        </div>
        <div className="social-media-box">
          <a href="https://www.linkedin.com/in/erika-wernbro/" target="_blank">
            <img src={linkedIn} alt="LinkedIn-icon" className="icon" />
          </a>
          <a href="https://github.com/Tejpex" target="_blank">
            <img src={githubSmall} alt="Github-icon" className="icon" />
          </a>
          <a
            href="https://stackoverflow.com/users/23468394/tejpex"
            target="_blank"
          >
            <img
              src={stackOverflow}
              alt="StackOverflow-icon"
              className="icon"
            />
          </a>
          <a href="https://bsky.app/profile/tejpex.bsky.social" target="_blank">
            <img src={blueSky} alt="Bluesky-icon" className="icon" />
          </a>
          <a href="https://www.instagram.com/tejpex/" target="_blank">
            <img src={instagram} alt="Instagram-icon" className="icon" />
          </a>
        </div>
      </div>
    </div>
  )
}
