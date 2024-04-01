import "./profilePhoto.css"
import profilePhoto from "./profilePhoto.jpg"

export const ProfilePhoto = () => {
  return (
    <img className="profilePhoto" src={profilePhoto} alt="developer's photo" />
  );
};