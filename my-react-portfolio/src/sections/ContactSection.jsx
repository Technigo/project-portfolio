import LinkedInBtn from '../assets/linkedin-btn.svg'
import GithubBtn from '../assets/github-btn.svg'
import StackoverflowBtn from '../assets/stackoverflow-btn.svg'
import TwitterBtn from '../assets/twitter-btn.svg'
import InstagramBtn from '../assets/instagram-btn.svg'
import { Grid } from '../ui/Grid/Grid'
import { SectionTitle } from '../ui/Typography/Typography'
import './ContactSection.css'
import PortfolioPic from '../assets/portfolio-pic.jpg'
import { SocialMediaIcon } from '../components/SocialMediaIcon/SocialMediaIcon'

export const ContactSection = () => {
  return (
    <Grid background="white">
      <section className="contact-section">
        <SectionTitle>Let&#39;s Talk</SectionTitle>
        <div className="contact-container">
          <div className="contact-photo-container">
            <img className="contact-photo" src={PortfolioPic} alt="headshot of Joyce Kuo" />
          </div>
          <div className="contact-info">
            <p>Joyce Kuo</p>
            <p>+46(0)727 49 98 99</p>
            <p>joyce.kuo@me.com</p>
          </div>
          <div className="social-links">
            <SocialMediaIcon
              link="https://www.linkedin.com/in/joyce-kuo-1018bb30/"
              icon={LinkedInBtn}
              altText="LinkedIn profile"
              ariaLabel="Visit LinkedIn profile (opens in a new window)"
            />
            <SocialMediaIcon
              link="https://github.com/JoyceKuode"
              icon={GithubBtn}
              altText="GitHub profile"
              ariaLabel="Visit GitHub profile (opens in a new window)"
            />
            <SocialMediaIcon
              link="https://stackoverflowteams.com/c/technigo/users/646/?tab=profile"
              icon={StackoverflowBtn}
              altText="Stack Overflow profile"
              ariaLabel="Visit Stack Overflow profile (opens in a new window)"
            />
            <SocialMediaIcon
              link="https://stackoverflowteams.com/c/technigo/users/646/?tab=profile"
              icon={TwitterBtn}
              altText="Twitter profile"
              ariaLabel="Visit Twitter profile (opens in a new window)"
            />
            <SocialMediaIcon
              link="https://stackoverflowteams.com/c/technigo/users/646/?tab=profile"
              icon={InstagramBtn}
              altText="Instagram profile"
              ariaLabel="Visit Instagram profile (opens in a new window)"
            />
          </div>
        </div>
      </section>
    </Grid>
  )
}
