import PropTypes from "prop-types";
import "../styling/Tags.css";

const Tags = ({ text }) => {
  return <div className="tag">{text}</div>;
};

Tags.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tags;
