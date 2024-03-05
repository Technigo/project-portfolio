import profileImage from "/assets/Profile-photo.jpg";
import "./ProfilePhoto.css";

export const ProfilePhoto = () => {
  return (
    <img
      src={profileImage}
      className="profile-photo"
      alt="Photo of Anna Robertsson, Frontend Developer"
    />
  );
};
