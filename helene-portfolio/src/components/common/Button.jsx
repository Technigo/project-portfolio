import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ className, type, size, variant, children }) => {
  return (
    <button className={`button ${size} ${variant} ${className}`} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  size: PropTypes.oneOf(["medium", "large"]),
  variant: PropTypes.oneOf(["primary", "secondary", "inverted"]),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: "button button--primary",
  type: "button",
  size: "medium",
  variant: "primary",
};

export default Button;
