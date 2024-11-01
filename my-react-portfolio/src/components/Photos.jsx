import PropTypes from "prop-types";
import "../styling/featureProjects/Photos.css";

const Photos = ({ images }) => {
  return (
    <div className="photos">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Project ${index + 1}`}
          className="projectImage"
        />
      ))}
    </div>
  );
};

Photos.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Photos;
