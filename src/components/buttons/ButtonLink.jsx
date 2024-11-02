import PropTypes from 'prop-types';
import "./ButtonLink.css";

export const BtnLink = ({ text = "View Code", img = null, url }) => {
  const handleClick = () => {
    window.open(url, "_blank"); // Opens the link in a new tab
  };

  return (
    <button className="btn-primary" onClick={handleClick} aria-label={text}>
      {img && <img src={img} alt="" />}
      <p>{text}</p>
    </button>
  );
};

// Define PropTypes to validate props
BtnLink.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string.isRequired
};
