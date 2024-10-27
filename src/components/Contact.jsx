import "./Contact.css"
import "./TopSection.css"
import portrait from "/assets/portrait.jpg"
import linkedin from "/assets/linkedin.svg"
import githubs from "/assets/githubs.svg"
import stackoverflow from "/assets/stackoverflow.svg"
import instagram from "/assets/instagram.svg"


export const Contact=()=> {
  return (
    <div className="contact">
      <div className="contactContent">
        <p className="titleBlue">Let's talk</p>
        
        <img src={portrait} alt="JingPortrait" className="portrait" />
        <div className="contactDetail">
          <p>Jing Huang</p>
          <p>+46(0)732 16 95 08</p>
          <p>jinghuang0628@gmail.com</p>
        </div>
      
        <div className="socialMedia">
          <a href="https://www.linkedin.com/in/jinghuangjh/" target="_blank">
          <img src={linkedin} alt="linkedin_logo" />
          </a>

          <a href="https://github.com/jingh999" target="_blank">
            <img src={githubs} alt="github_logo" />
          </a>

          <a href="https://stackoverflowteams.com/c/technigo/users/637/?tab=profile" target="_blank">
            <img src={stackoverflow} alt="stackoverflow_logo" />
          </a>

          <a href="https://www.instagram.com/jingxoh/" target="_blank">
            <img src={instagram} alt="instagram_logo" />
          </a>
        </div>
      </div>
    </div>
  )
}
