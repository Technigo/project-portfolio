/* eslint-disable react/prop-types */

/* ========== TEXT SECTION ========== */

/* This component renders a text section used twice in the app. 

- The first text section displays four columns with an orange border between each column.
- The second text section has a centered heading and body text.*/

import "./TextSection.css";
import { H2, H3, Body } from "../../ui/typography/Typography";

const skillsContent = [
  {
    title: "Code",
    items: ["HTML5", "CSS3", "JavaScript ES6", "React", "Styled Components", "GitHub"]
  },
  {
    title: "Toolbox",
    items: ["Atom", "Postman", "Adobe Photoshop", "Adobe Illustrator", "Figma", "Keynote", "Slack"]
  },
  {
    title: "Upcoming",
    items: ["Node.js"]
  },
  {
    title: "More",
    items: ["Branding", "Strategy", "Process Design", "Concept Development", "Agile methodology"]
  }
];

const techContent = {
  title: "Tech",
  description: "HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, MongoDB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub."
};

export const TextSection = ({ category }) => {
  if (category === "skills") {
    return (
      <div className="text-section-skills">
        <H2 heading="Skills" />
        <div className="skills-columns">
          {skillsContent.map((column, index) => (
            <div key={index} className="skills-column">
              <H3 heading={column.title} />
              {column.items.map((item, idx) => (
                <Body key={idx} text={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  } else if (category === "tech") {
    return (
      <div className="text-section-tech">
        <H2 heading={techContent.title} />
        <H3 heading={techContent.description} />
      </div>
    );
  } else {
    return null;
  }
};
