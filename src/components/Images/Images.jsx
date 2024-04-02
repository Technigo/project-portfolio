import PropTypes from "prop-types";
import profilePic from "/assets/profile.jpg";
import styles from "./Images.module.css";

export const Profile = () => {
  return (
    <div className={styles.profilePicContainer}>
      <img src={profilePic} alt="profile" className={styles.profilePic} />
    </div>
  );
};

export const Images = ({ image }) => {
  return <img src={image} alt="project-image" className={styles.projectImage} />;
};

Images.propTypes = {
  image: PropTypes.string.isRequired,
};
