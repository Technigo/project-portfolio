import './Contact.css'
import { PageTopic } from '../smallComps/PageTopic'
import { Linkedin } from '../iconfoler/Linkedin'
import { Github } from '../iconfoler/Github'
import { Stackover } from '../iconfoler/Stackoverflow'
import { Instagram } from '../iconfoler/ig'

export const Contact = () => {
    const linkedin = "https://www.linkedin.com/in/trista-shan-62074471/"
    const profilePhoto ="/images/profilePhoto.jpg" 
    const github = "https://github.com/trista1987"
    const stackover="https://stackoverflowteams.com/c/technigo/users/598/?tab=profile"
    const instagram = "https://www.instagram.com/trista_shan/"

    return (
      <section className="contact-wrapper">
        <PageTopic pageTopic={"Let's Talk"} className={"contact"} />
        <div className="contactContent">
          <img
            src={profilePhoto}
            alt="profile photo"
            className="profilePhoto"
          />
          <div className="info">
            <p className="name">Trista Shan</p>
          </div>
        </div>
        <div className="contactIcons">
            <a href={linkedin}>
              <Linkedin />
            </a>
            <a href={github}>
              <Github />
            </a>
            <a href={stackover}>
              <Stackover />
            </a>
            <a href={instagram}>
              <Instagram />
            </a>
          </div>
      </section>
    );
}
