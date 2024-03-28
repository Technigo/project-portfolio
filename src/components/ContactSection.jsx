import React from "react";
import "./ContactSection.css";
import { Heading } from "./Heading";
import linkedinLogo from "../assets/images/icon-linkedin.svg";
import githubLogo from "../assets/images/icon-github.svg";
import instagramLogo from "../assets/images/icon-instagram.svg";

export const Contact = ({ repo }) => {
  return (
    <div className="contact-section">
      <Heading text="Get in touch" color="white" />
      {repo && repo.owner && repo.owner.avatar_url && (
        <img
          className="header-img"
          src={repo.owner.avatar_url}
          alt="Profile image"
        />
      )}
      <div className="contact-text">
        <p className="contact-name">Johanna Billingskog Nyberg</p>
        <p className="contact-name">+46(0)734 433 503</p>
        <p className="contact-name">johanna@billingskognyberg.se</p>
      </div>
      <div className="contact-social-icons">
        <a
          href="https://www.linkedin.com/in/johanna-billingskog-nyberg-b28b4738"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinLogo}
            alt="Linkedin Logo"
            className="linkedin-logo"
          />
        </a>
        <a
          href="https://github.com/JohannaBN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="Github Logo" className="github-logo" />
        </a>
        <a
          href="https://www.instagram.com/jonisgarden/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagramLogo}
            alt="Instagram Logo"
            className="instagram-logo"
          />
        </a>
      </div>
    </div>
  );
};

// import React from "react";
// import "./ContactSection.css";
// import { Heading } from "./Heading";
// import linkedinLogo from "../assets/images/icon-linkedin.svg";
// import githubLogo from "../assets/images/icon-github.svg";
// import instagramLogo from "../assets/images/icon-instagram.svg";

// export const Contact = ({ repo }) => {
//   return (
//     <div className="contact-section">
//       <Heading text="Get in touch" color="white" />
//       {repo && repo.owner && repo.owner.avatar_url && (
//         <img
//           className="header-img"
//           src={repo.owner.avatar_url}
//           alt="Profile image"
//         />
//       )}
//       <div className="contact-text">
//         <p className="contact-name">Johanna Billingskog Nyberg</p>
//         <p className="contact-name">+46(0)734 433 503</p>
//         <p className="contact-name">johanna@billingskognyberg.se</p>
//       </div>
//       <div className="contact-social-icons">
//         <a
//           href="https://www.linkedin.com/in/johanna-billingskog-nyberg-b28b4738"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src={linkedinLogo}
//             alt="Linkedin Logo"
//             className="linkedin-logo"
//           />
//         </a>
//         <a
//           href="https://github.com/JohannaBN"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={githubLogo} alt="Github Logo" className="github-logo" />
//         </a>
//         <a
//           href="https://www.instagram.com/jonisgarden/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src={instagramLogo}
//             alt="Instagram Logo"
//             className="instagram-logo"
//           />
//         </a>
//       </div>
//     </div>
//   );
// };
