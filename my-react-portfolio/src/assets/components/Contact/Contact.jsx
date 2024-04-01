import './Contact.css'
import { PageTopic } from '../PageTopic'
import { Linkedin } from '../iconfoler/Linkedin'
import { Github } from '../iconfoler/Github'
import { Stackover } from '../iconfoler/Stackoverflow'
import { Instagram } from '../iconfoler/ig'
import { ProfilePhoto } from '../profilePhoto/ProfilePhoto'

export const Contact = () => {
    const linkedin = "https://www.linkedin.com/in/trista-shan-62074471/"
    const github = "https://github.com/trista1987"
    const stackover="https://stackoverflowteams.com/c/technigo/users/598/?tab=profile"
    const instagram = "https://www.instagram.com/trista_shan/"

    return (
      <section className="contact-wrapper">
        <PageTopic pageTopic={"Let's Talk"} className={"contact"} />
        <div className="contactContent">
          <ProfilePhoto />
          <div className="info">
            <p className="name">Trista Shan</p>
          </div>
        </div>
        <div className="contactIcons">
            <a href={linkedin} alt="Linkedin button">
              <Linkedin />
            </a>
            <a href={github} alt="Github button">
              <Github />
            </a>
            <a href={stackover} alt="Stack over flow button">
              <Stackover />
            </a>
            <a href={instagram} alt="Instagram button">
              <Instagram />
            </a>
          </div>
      </section>
    );
}
