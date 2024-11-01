// import React from "react"; 
// import "./Skills.css";

// const Skills = () => {
//   return (
//     <section className="skill-container">
//       <h2>Skills</h2>
//       <div className="info-container">
//         hejhejhej
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skills-category">
          <h3 className="titel-container">Code</h3>
          <ul className="skills-list code-skills">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>GitHub</li>
          </ul>
        </div>
        {/* Add more skill categories */}
        <div className="skills-category">
          <h3>Toolbox</h3>
          <ul className="skills-list">
            <li>Atom</li>
            <li>Postman</li>
            {/* Add more skills in this category */}
          </ul>
        </div>
        <div className="skills-category">
          <h3>Upcoming</h3>
          <ul className="skills-list">
            <li>Node.js</li>
            {/* Add more skills in this category */}
          </ul>
        </div>
        <div className="skills-category">
          <h3>More</h3>
          <ul className="skills-list">
            <li>Branding</li>
            <li>Strategy</li>
            {/* Add more skills in this category */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;