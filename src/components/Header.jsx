import React from "react";
import "./Header.css";
// import Heading from "./Heading";

export const Header = ({ repo }) => {
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
      {/* <Heading text="Frontend Developer" color="#E8998D" /> */}
    </div>
  );
};

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
