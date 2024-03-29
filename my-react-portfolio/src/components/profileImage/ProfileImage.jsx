import "./ProfileImage.css";

export const ProfileImage = () => {
  const portrait = "/portrait.jpg";
  return <img className="profile-image" src={portrait} alt="Eliane" />;
};
