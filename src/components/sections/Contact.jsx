import { ProfilePicture } from "../reusable/ProfilePicture"
import {
  FaLinkedinIn,
  FaGithub,
  FaStackOverflow,
  FaInstagram,
} from "react-icons/fa"

export const Contact = () => {
  return (
    <div className="contact">
      <h2 className="title">Let's talk</h2>
      <ProfilePicture />
      <p className="montserrat">Alma Herrström</p>
      <p className="montserrat">almaherrstrom@hotmail.com</p>
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/alma-herrstr%C3%B6m-85a840111/"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/almaherris"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a
          href="https://stackoverflow.com/users/22531351/almahe"
          target="_blank"
          rel="noopener noreferrer">
          <FaStackOverflow />
        </a>

        <a
          href="https://www.instagram.com/almaherrstrom/"
          target="_blank"
          rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </div>
  )
}
