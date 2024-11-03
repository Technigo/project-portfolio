import PropTypes from "prop-types";
import ArrowForward from "../../assets/icons/arrow_forward.svg?react";
import ArrowUpward from "../../assets/icons/arrow_upward.svg?react";
import GitHub from "../../assets/icons/github.svg?react";
import LinkedIn from "../../assets/icons/linkedin.svg?react";
import Mystery from "../../assets/icons/mystery.svg?react";

const icons = {
  arrowForward: ArrowForward,
  arrowUpward: ArrowUpward,
  gitHub: GitHub,
  linkedIn: LinkedIn,
  mystery: Mystery,
};

const Icon = ({ iconName, ...props }) => {
  const IconComponent = icons[iconName];

  return IconComponent ? <IconComponent {...props} /> : null;
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default Icon;
