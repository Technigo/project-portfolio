// import html from "../assets/html.svg";
// import css from "../assets/css.svg";
// import js from "../assets/javascript.svg";
// import react from "../assets/react.svg";
// import npm from "../assets/npm.svg";
// import nodejs from "../assets/nodejs.svg";
import Icon from "./Icon";

const icons = [
  "html",
  "css",
  "javascript",
  "react",
  "npm",
  "nodejs",
  "postman",
  "figma",
  "git",
  "python",
  "vscode",
  "github",
];
const Tech = () => {
  return (
    <section id="tech">
      <div>
        {icons.map((icon, index) => (
          <Icon key={index} name={icon} />
        ))}
      </div>
    </section>
  );
};

export default Tech;
