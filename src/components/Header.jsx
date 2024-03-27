import React from "react";
import "./Header.css";
import arrowIcon from "../assets/images/noun-arrow-2989497-FFFFFF.svg";
// import Heading from "./Heading";

export const Header = ({ repo }) => {
  // Check if the repo object and its owner property are defined
  if (!repo || !repo.owner) {
    return null; // Return null if repo or repo.owner is undefined
  }

  return (
    <div className="header-container">
      <img
        className="header-img"
        src={repo.owner.avatar_url}
        alt="Profile image"
      />
      <div>
        <h1 className="header-name">Johanna Billingskog Nyberg</h1>
      </div>
      <h2 className="header-title">Frontend Developer</h2>
      <p className="header-text">
        Loves to build beautiful things - both digital and in real life. Curious
        and eager to master coding as a great complement to my background in
        e-commerce and graphic design. I'm a focused and creative doeer.
      </p>
      <img className="arrow-icon" src={arrowIcon} alt="Arrow" />
    </div>
  );
};

// import React from "react";
// import "./Header.css";
// import arrowIcon from "../assets/images/noun-arrow-2989497-FFFFFF.svg";
// // import Heading from "./Heading";

// export const Header = ({ repo }) => {
//   return (
//     <div className="header-container">
//       <img
//         className="header-img"
//         src={repo.owner.avatar_url}
//         alt="Profile image"
//       />
//       <div>
//         <h1 className="header-name">Johanna Billingskog Nyberg</h1>
//       </div>
//       <h2 className="header-title">Frontend Developer</h2>
//       <p className="header-text">
//         Loves to build beautiful things - both digital and in real life. Curious
//         and eager to master coding as a great complement to my background in
//         e-commerce and graphic design. I'm a focused and creative doeer.
//       </p>
//       <img className="arrow-icon" src={arrowIcon} alt="Arrow" />
//     </div>
//   );
// };

// import React from "react";
// import "./Header.css";
// import Heading from "./Heading";

// export const Header = ({ repo }) => {
//   return (
//     <div className="header-container">
//       <img
//         className="header-img"
//         src={repo.owner.avatar_url}
//         alt="Profile image"
//       />
//       <div>
//         <h1 className="header-name">Johanna Billingskog Nyberg</h1>
//       </div>
//       <Heading text="Frontend Developer" />
//     </div>
//   );
// };
