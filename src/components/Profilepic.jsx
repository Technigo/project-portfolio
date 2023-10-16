import profileImage from "/Lisa.JPG";
import "./profilepic.css";

export const ProfilePhoto = () => {
    return (
        <img
            src={profileImage}
            className="profile-photo"
            alt="Photo of Lisa Dahlkar, Frontend Developer"
        />
    );
};