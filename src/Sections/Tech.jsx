import { Headline } from "./Headline";
import "./Tech.css";

export const Tech = () => {
  return (
    <div className="tech-container">
      <Headline text="Tech" level={1} className="tech-h1" />
      {/* <h1>Tech</h1> */}
      <p>
        HTML, CSS, Flexbox, JavaScript, Grid, ES6, JSX, React, React Hooks,
        Node.js, Web Accessibility, API:s, mob-programmin, pair-programming,
        Github, Netlify
      </p>
    </div>
  );
};

{
  /* <Headline text="Tech" level={1} className="tech-h1" /> */
}
