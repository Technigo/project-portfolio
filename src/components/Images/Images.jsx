import PropTypes from "prop-types";
import profilePic from "/assets/profile.jpg"
import styles from "./Images.module.css";

export const Images = ({ image }) => {
  return <img src={image} alt="project-image" />;
};

export const Profile = ( ) => {
  return <img src={profilePic} alt="profile" className={styles.profilePic} />;
}

Images.propTypes = {
  image: PropTypes.string.isRequired,
};
