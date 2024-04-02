import "./Image.css";
import PropTypes from "prop-types";

export const Image = ({
  divClassName,
  elementClassName,
  imagePath,
  imageAltText,
}) => {
  return (
    <div className={divClassName}>
      <img className={elementClassName} src={imagePath} alt={imageAltText} />
    </div>
  );
};

// Prop type validation
Image.propTypes = {
  divClassName: PropTypes.string,
  elementClassName: PropTypes.string,
  imagePath: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
};
