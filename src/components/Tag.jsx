import PropTypes from 'prop-types';
import './Tag.css';

export const Tag = ({ text, variant = 'white' }) => {
  return (
    <div className={`tag ${variant}`}>
      <div className="text-wrapper">{text}</div>
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['white', 'black']),
};
