import React from "react";
import "./ProfilePicture.css";

export const ProfilePicture = () => {
  return (
    <div className="profile-picture">
      <img
        src="public/ProfilePicture.jpg"
        alt="Profile image"
        className="profile-image"
      />
    </div>
  );
};
