import PropTypes from "prop-types";
//Resusable component for normal text such as the longer text in the header section

export const NormalText = ({ text }) => {
  return <p className="normal">{text}</p>;
};

// Prop type validation
NormalText.propTypes = {
  text: PropTypes.string.isRequired,
};
