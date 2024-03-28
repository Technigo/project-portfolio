import React from "react";
import "./ContactSection.css";
import { Heading } from "./Heading";

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
    </div>
  );
};
// import React from "react";
// import "./ContactSection.css";
// import { Heading } from "./Heading";

// export const Contact = ({ repo }) => {
//   return (
//     <div className="contact-section">
//       <Heading text="Get in touch" color="white" />{" "}
//       <img
//         className="header-img"
//         src={repo.owner.avatar_url}
//         alt="Profile image"
//       />
//       <p className="contact-text">TEst test sets</p>
//     </div>
//   );
// };
