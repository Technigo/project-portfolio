import PropTypes from "prop-types";
//Resusable component for large text such as text in Tech section

export const LargeText = ({ text }) => {
  return <p className="large">{text}</p>;
};

// Prop type validation
LargeText.propTypes = {
  text: PropTypes.string.isRequired,
};
