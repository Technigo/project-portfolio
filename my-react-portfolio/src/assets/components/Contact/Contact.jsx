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
          <ProfilePhoto className={"profilePhoto"} />
          <div className="info">
            <p className="name">Trista Shan</p>
            <p className='location'>📍 Helsinki, Finland</p>
          </div>
        </div>
        <div className="contactIcons">
          <a href={linkedin} alt="Linkedin button" aria-label="Link to Linkedin profile page">
            <Linkedin />
          </a>
          <a href={github} alt="Github button" aria-label="Link to Github page">
            <Github />
          </a>
          <a href={stackover} alt="Stack over flow button" aria-label="Link to stack overflow page">
            <Stackover />
          </a>
          <a href={instagram} alt="Instagram button" aria-label="Link to instagram page">
            <Instagram />
          </a>
        </div>
      </section>
    );
}