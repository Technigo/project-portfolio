import arrowImage from "/arrow2.svg";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-title">
        <h2>Hi, I&apos;m Lorenzo Dastoli</h2>
        <h1>Frontend Developer</h1>
      </div>

      <img
        className="profile-picture"
        src="./lorenzo-dastoli.jpg"
        alt="Lorenzo Dastoli"
      />
      <div className="profile-info">
        <p>
        Passionate for graphic design, my expertise in HTML, CSS, JavaScript, and React enables me to focus on creating visually appealing and user-friendly interfaces for dynamic websites. I am dedicated to honing my skills and making meaningful contributions to the field of web development.
        </p>
      </div>
      <div className="profile-arrow">
        <img className="arrow" src={arrowImage} alt="Down arrow"></img>
      </div>
    </div>
  );
};