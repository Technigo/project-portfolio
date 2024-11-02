// Tag.jsx
import PropTypes from 'prop-types';
import "./Tag.css";

export const Tag = ({ text }) => {
  return (
    <div className="tag">
      <div className="text-wrapper">{text}</div>
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};
