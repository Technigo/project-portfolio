// SocialLinks.jsx

import linkedIn from "../../assets/linkedIn.svg"

export const SocialLinks = () => {
  return (
    <>
      <button className="svg-button">
        <a
          href="www.linkedin.com/in/emelie-nyberg-kedert-753542111"
          target="_blank"
          rel="noopener noreferrer">
          <img src={linkedIn} alt="SVG Icon" />
        </a>
      </button>
    </>
  );
};

// FORTSÄTT GÖRA ALLA SOCIAL LINKS
