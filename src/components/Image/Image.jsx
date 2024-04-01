import PropTypes from "prop-types";
import profilePic from "/assets/profile.jpg"

export const Image = ({ image }) => {
  return <img src={image} alt="project-image" />;
};

export const Profile = ( ) => {
  return <img src={profilePic} alt="profile" />;
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
};
