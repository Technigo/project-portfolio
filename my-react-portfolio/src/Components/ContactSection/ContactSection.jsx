import linkedinBtn from './Btn - linkedin.svg'
import gitHubBtn from './Btn - github.svg'
import stackoverflowBtn from './Btn - stackoverflow.svg'
import './contactSection.css'
export const ContactSection = () => {
  return (
    <div className="contactSection">
      <div className="contactSectionContainer">
        <h1>Let&apos;s talk</h1>
        <div className="image"></div>
        <div className="contactInfo">
          <h2>Vittoria Matteoli</h2>
          <a href="tel:+41791284799"> +41(0)791284799</a>
          <a href="mailto:info@vittoriamatteoli.com">
            info@vittoriamatteoli.com
          </a>
        </div>
        <div className="socialLinks">
          <a href="https://www.linkedin.com/in/vittoria-matteoli/">
            <img src={linkedinBtn} alt="linkedin-icon" />
          </a>
          <a href="https://github.com/vittoriamatteoli">
            <img src={gitHubBtn} alt="gitHub-icon" />
          </a>
          <a href="https://stackoverflow.com/users/23100403/vittoria-matteoli">
            <img src={stackoverflowBtn} alt="stackoverflow-icon" />
          </a>
        </div>
      </div>
      <footer>
        <h2 className="loopName">
          Vittoria Matteoli • Frontend Developer • Vittoria Matteoli • Frontend
          Developer • Vittoria Matteoli • Frontend Developer{' '}
        </h2>
      </footer>
    </div>
  )
}
