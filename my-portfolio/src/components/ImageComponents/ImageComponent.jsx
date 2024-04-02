import "./Image.css";
import PropTypes from "prop-types";

export const ImageComponent = ({
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
ImageComponent.propTypes = {
  divClassName: PropTypes.string,
  elementClassName: PropTypes.string,
  imagePath: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
};
