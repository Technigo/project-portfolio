import "./LetsTalk.css";
import profilePicture from "../assets/profilepicture.jpg";
import LinkedinIcon from "../assets/LinkedinIcon.svg";
import GitIcon from "../assets/GitIcon.svg";

const LetsTalk = () => {
  // Function to handle link clicks and open in a new tab
  const handleLinkClick = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <div className="lets-talk-container">
      <h2>Let's Talk</h2>
      <div className="lets-talk-text">
        <div className="profile-picture-container">
          <img src={profilePicture} alt="Picture of Elina" className="profile-picture" />
        </div>
        <div className="lets-talk-box">Elina Eriksson Hult</div>
        <div className="lets-talk-box">+46 (0)793 36 64 58</div>
        <div className="lets-talk-box">elinaerikssonhult@gmail.com</div>
      </div>

      {/* Social media icons with clickable onClick handlers */}
      <div className="logo-container">
        <img
          src={LinkedinIcon} 
          alt="LinkedIn Logo" 
          className="linkedin-logo logo" 
          onClick={() => handleLinkClick("https://www.linkedin.com/in/elina-eriksson-hult-49712815b/")} 
        />

        <img 
          src={GitIcon} 
          alt="GitHub Logo" 
          className="logo" 
          onClick={() => handleLinkClick("https://github.com/ElinaEH")} 
        />

         {/* Stack overflow, Twitter and instagram removed */}
        {/* <img 
          src={StackIcon} 
          alt="Stack Overflow Logo" 
          className="logo" 
          onClick={() => handleLinkClick("https://stackoverflow.com")} 
        /> */}

        {/* <img 
          src={TwitterIcon} 
          alt="Twitter Logo" 
          className="logo" 
          onClick={() => handleLinkClick("https://twitter.com")} 
        /> */}
        {/* <img 
          src={InstagramIcon} 
          alt="Instagram Logo" 
          className="logo" 
          onClick={() => handleLinkClick("https://instagram.com")} 
        /> */}
      </div>
      <footer>© 2024 Elina Eriksson Hult</footer>
    </div>
  );
};

export default LetsTalk;
