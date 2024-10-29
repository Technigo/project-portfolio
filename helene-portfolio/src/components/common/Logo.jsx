import SiteLogo from "../../assets/images/helene-westrin-logo.svg?react";
import "./Logo.css";

const Logo = () => {
  return (
    <a
      className="logo__link"
      href="/"
      aria-label="Home page of Helene Westrin's portfolio"
    >
      <SiteLogo />
      <span>Helene</span>
    </a>
  );
};

export default Logo;
