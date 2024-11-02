import PropTypes from 'prop-types';
import "./ButtonArticle.css";

export const BtnArticle = ({ text = "View Code", img = null, url }) => {
  const handleClick = () => {
    window.open(url, "_blank"); // Opens the link in a new tab
  };

  return (
    <button className="btn-secondary" onClick={handleClick} aria-label={text}>
      {img && <img src={img} alt="" />}
      <p>{text}</p>
    </button>
  );
};

// Define PropTypes to validate props
BtnArticle.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string.isRequired
};
