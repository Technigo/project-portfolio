import "./profilePhoto.css"
import profilePhoto from "./profilePhoto.jpg"

export const ProfilePhoto = ({className} ) => {
  return (
    <img className={className} src={profilePhoto} alt="Trista's photo" />
  );
};