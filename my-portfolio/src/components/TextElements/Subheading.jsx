import PropTypes from "prop-types";
//Resusable component for subheading text such as subheadings in the skills section

export const Subheading = ({ className, text }) => {
  return <h3 className={className}>{text}</h3>;
};

// Prop type validation
Subheading.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
