/* eslint-disable react/prop-types */
import "./IconButtons.css";
import iconLinkedin from "../../../assets/iconLinkedin.svg";
import iconTwitter from "../../../assets/iconTwitter.svg";
import iconInstagram from "../../../assets/iconInstagram.svg";
import iconGithub from "../../../assets/iconGithub.svg";

const iconMap = {
  linkedin: iconLinkedin,
  github: iconGithub,
  twitter: iconTwitter,
  instagram: iconInstagram,
};

export const IconButton = ({ iconName, onClick }) => {
  const icon = iconMap[iconName]; 

  return (
    <button className="icon-button" onClick={onClick}>
      <img src={icon} alt={`${iconName} icon`} className="icon-only" />
    </button>
  );
};