import PropTypes from 'prop-types';
import "./ButtonLink.css";

export const BtnLive = ({ link, text, img }) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <button className="btn-primary" onClick={handleClick} aria-label={text}>
      <img className="btn-img" alt={text} src={img} />
      <p>{text}</p>
    </button>
  );
};

BtnLive.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
