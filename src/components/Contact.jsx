import "./Contact.css"
import "./TopSection.css"
import portrait from "/assets/portrait.jpg";

export const Contact=()=> {
  return (
    <div className="top">
      <div className="content">
        <p className="titleBlue">Let's talk</p>
        
        <img src={portrait} alt="JingPortrait" className="portrait" />
        <div className="contactDetail">
          <p>Jing Huang</p>
          <p>+46(0)732 16 95 08</p>
          <p>jinghuang0628@gmail.com</p>
        </div>
      
        <div className="socialMedia">
        </div>
      </div>


    </div>
  )
}
