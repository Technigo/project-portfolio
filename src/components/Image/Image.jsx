import PropTypes from "prop-types";

export const Image = ({ image }) => {
  return <img src={image} alt="image" />;
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
};
