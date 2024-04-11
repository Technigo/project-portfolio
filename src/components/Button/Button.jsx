import PropTypes from 'prop-types';
import gitImage from "/github_icon.png";
import globeImage from "/world_icon.png";
import "./Button.css";

export const Button = ({ image, text, source, color }) => {
  let icon = "";
  if (image === "Globe") {
    icon = globeImage;
  }
  if (image === "GitHub") {
    icon = gitImage;
  }
  console.log(icon);
  return (
    <div className={`link-button ${color}`}>
      <a href={source}>
        <div className="button-interior">
          <img src={icon} alt={`${image} icon`} />
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
};

Button.propTypes = {
  image: PropTypes.oneOf(["Globe", "GitHub"]).isRequired,
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
