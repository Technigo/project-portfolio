import React from "react";
import "./Tech.css";

export const Tech = () => {
  return (
    <section className="tech-container">
      <div className="tech-wrapper">
        <h1>Tech</h1>
      </div>
      <div className="tech-stack">
        <p>
          HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,
          Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming,
          Github.
        </p>
      </div>
    </section>
  );
};

// return (
//   <div className="tech-container">
//     <div className="tech-wrapper">
//       <MainHeading className={"tech-h2"} text={"Tech"} />
//       <div className="techstack-wrapper">
//         <p>
//           HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,
//           Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming,
//           Github.
//         </p>
//       </div>
//     </div>
//   </div>
// );
