import profilePicture from "/profile-picture.jpeg";
import "./ProfilePicture.css";

const ProfilePicture = () => {
  return (
    <img
      className="profile-picture"
      src={profilePicture}
      alt="Frida Svensson"
    />
  );
};

export default ProfilePicture;
