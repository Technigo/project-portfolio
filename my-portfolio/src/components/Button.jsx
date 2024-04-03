import { PropTypes } from "prop-types";

export const Button = ({ buttonStyle, buttonName, buttonIcon, url }) => {
  return (
    <>
      <a href={url} target="_blank" rel="noreferrer noopener">
        <button className={buttonStyle}>
          <img src={buttonIcon} alt="icon" />
          <p>{buttonName}</p>
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
