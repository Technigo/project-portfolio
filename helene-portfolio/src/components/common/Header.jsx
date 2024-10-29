import PropTypes from "prop-types";
import Logo from "./Logo";

const Header = ({ theme, onSetTheme }) => {
  return (
    <header>
      <div className="header__logo">
        <Logo />
      </div>
      <button
        onClick={() =>
          onSetTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
        }
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        Toggle Theme
      </button>
    </header>
  );
};

// Prop validation
Header.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  onSetTheme: PropTypes.func.isRequired,
};

export default Header;
