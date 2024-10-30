// ContactPicture.jsx

import profilePicture from "../../../assets/examplepic2.png";

export const ContactPicture = () => {
  return (
    <div className="profile-picture">
      <img src={profilePicture} alt="Contact picture" />
    </div>
  );
};