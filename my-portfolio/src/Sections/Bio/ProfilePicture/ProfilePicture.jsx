// ProfilePicture.jsx

import profilePicture from "../../../assets/examplepic2.png";
import "./ProfilePicture.css"

export const ProfilePicture = () => {
  return (
    <div className="profile-picture">
      <img src={profilePicture} alt="Profile picture" />
    </div>
  );
};