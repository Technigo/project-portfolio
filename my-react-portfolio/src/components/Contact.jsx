import portrait from '../assets/portrait.png'
import email from '../assets/email.svg'
import linkedin from '../assets/linkedin.svg'
import githubProfile from '../assets/github-profile.svg'
import instagram from '../assets/instagram.svg'
import './css/contact.css'
import {  ToTopButton } from './ToTopButton'

export const Contact = () => {
  return (
    <div className="contact">
    <div className="contact-info">
      <h1>Let&apos;s talk</h1>
      <img src={portrait} id="portrait" alt="portait of Izabel" />
      <h3>Izabel Lind Färnstrand</h3>
      <h3>+46729632973</h3>
      <div className="email"><a href="mailto:contact@izabellind.com"><img src={email} alt="email" id="email"/><h3>contact@izabellind.com</h3></a>
      </div>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/izabel-lind-färnstrand-6336071a2" target="_blank"><img src={linkedin} alt="linkedin link"/></a>
        <a href="https://github.com/Izzibizz" target="_blank"><img src={githubProfile} alt="github profile link" /></a>
        <a href="https://www.instagram.com/izabellind.official/" target="_blank"><img src={instagram} alt="instagram profile link" /></a>
        </div>
    </div>
        <ToTopButton />
        </div>
  )
}
