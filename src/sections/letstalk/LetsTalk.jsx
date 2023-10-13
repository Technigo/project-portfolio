import "./letstalk.css";
import profilePic from "../../assets/Bild.jpg";

export const LetsTalk = () => {
  return (
    <div className="letstalk-container">
      <div className="lets-talk">
        <h3 className="lets-talk-title">LetsTalk</h3>
        <img
          src={profilePic}
          alt="profile-picture"
          className="profile-picture"
        />

        <div className="contact-info">
          <p className="contact-name">Andrej Kavrzic</p>
          <a href="tel:+46737332619" className="phone-number">
            +46(0)737332619
          </a>
          <a href="mailto:andrej.kavrzic@gmail.com">andrej.kavrzic@gmail.com</a>
        </div>
      </div>
    </div>
  );
};
