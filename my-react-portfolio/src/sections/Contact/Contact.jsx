import "./contact.css";
import LinkedIn from "../../assets/icon/Btn-linkedin.svg"
import GitHub from "../../assets/icon/Btn-github.svg"
import StackOverFlow from "../../assets/icon/Btn-stackoverflow.svg"
import Twitter from "../../assets/icon/Btn-twitter.svg"
import Instagram from "../../assets/icon/Btn-instagram.svg"

export const Contact = () => { 
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Let&apos;s Talk</h2>

        <div className="frame">
          <img src="./Me.jpg" alt="profile-picture of Xing Yin" className="image-me" />
          <p>Xing Yin</p>
          <p>+46 (0)765 25 76 35</p>
          <p>xing.yin@gmail.com</p>
        </div>
        
        <div className="socialmedia">
          <img src={LinkedIn} alt="LinkedIn"></img>
          <img src={GitHub} alt="GitHub"></img>
          <img src={StackOverFlow} alt="StackOverflow"
          ></img>
          <img src={Twitter} alt="Twitter"
          ></img>
          <img src={Instagram} alt="Instagram"
          ></img>
        </div>
      </div>
    </section>
  )
 }