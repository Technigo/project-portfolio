import PropTypes from 'prop-types';
import "./ButtonArticle.css";

export const BtnArticle = ({ text = "View Code", img = null, url }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <button className="btn-secondary" onClick={handleClick} aria-label={text}>
      {img && <img src={img} alt="" />}
      {text}
    </button>
  );
};

BtnArticle.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string.isRequired
};
