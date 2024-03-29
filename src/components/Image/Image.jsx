import PropTypes from "prop-types";

export const Image = ({ src }) => {
  return <img src={src} alt="image" />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
};
