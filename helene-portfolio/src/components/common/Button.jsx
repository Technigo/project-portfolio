import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  type = "button",
  size = "medium",
  variant = "primary",
  children,
  href,
  onClick,
  ...rest
}) => {
  const className = `button ${size} ${variant}`;

  if (href) {
    return (
      <a className={className} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["primary", "secondary", "inverted"]),
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
