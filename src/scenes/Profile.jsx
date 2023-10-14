import profileImg from "/dude.png";
import "./profile.css";
import { FaArrowDownLong } from "react-icons/fa6";

export const Profile = () => {
  return (
    <section className="profile" id="profile">
      <div className="profile-wrapper">
        <div className="profile-content">
          <div className="profile-image-container">
            <img src={profileImg} alt="profile image" />
          </div>
          <div className="title-subtitle">
            <p className="profile-subtitle">
              Hi, <span>I'm Julia Holm</span>
            </p>
            <h1 className="profile-title">Frontend Developer</h1>
          </div>
          <div className="profile-text">
            <p className="text-css">
              Julia is an exceptional developer known for her innovative
              solutions and exceptional coding abilities. She creates
              user-friendly applications and solves complex issues with ease.
              Her drive for excellence makes her a valuable asset to any project
              and a standout in the technology field.
            </p>
          </div>
        </div>

        <FaArrowDownLong className="arrow-down" />
      </div>
    </section>
  );
};
