import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  type = "button",
  size = "medium",
  variant = "primary",
  children,
}) => {
  return (
    <button className={`button ${size} ${variant}`} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["primary", "secondary", "inverted"]),
  children: PropTypes.node.isRequired,
};

export default Button;
