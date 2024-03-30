import "./ProfileImage.css";

export const ProfileImage = () => {
  const portrait = "/portrait.jpg";
  return (
    <div className="profile-image-wrapper">
      <img
        className="profile-image"
        src={portrait}
        alt="profile picture of eliane"
      />
    </div>
  );
};
