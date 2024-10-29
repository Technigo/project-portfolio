import { DarkModeSwitch } from "react-toggle-dark-mode";
import PropTypes from "prop-types";
import Logo from "./Logo";
import "./Header.css";

const Header = ({ theme, onSetTheme }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <button
        className="button-toggle-theme"
        type="button"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        onClick={() =>
          onSetTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
        }
      >
        <DarkModeSwitch
          checked={theme === "dark"}
          moonColor="#fff"
          sunColor="#2b2d31"
          size={40}
        />
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
