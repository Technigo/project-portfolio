import { PropTypes } from "prop-types";

export const Button = ({ buttonStyle, buttonName, buttonIcon, url }) => {
  return (
    <>
      <a href={url}>
        <button className={buttonStyle}>
          <img src={buttonIcon} alt="icon" />
          {buttonName}
        </button>
      </a>
    </>
  );
};

Button.propTypes = {
  buttonStyle: PropTypes.string,
  buttonName: PropTypes.string,
  buttonIcon: PropTypes.string,
  url: PropTypes.string,
};
