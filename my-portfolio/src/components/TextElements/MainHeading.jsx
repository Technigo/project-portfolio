import PropTypes from "prop-types";
//Resusable component for main heading used in all sections

export const MainHeading = ({ className, text }) => {
  return <h2 className={className}>{text}</h2>;
};

// Prop type validation
MainHeading.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
