import { Headline } from './Headline';
import './Tech.css';

export const Tech = () => {
  return (
    <div className="tech-container">
      <Headline text="Tech" level={1} className="tech-h1" />
      {/* <h1>Tech</h1> */}
      <p>
        HTML, CSS, Flexbox, Grid, JavaScript, ES6, JSX, React, React Hooks,
        i18next, Zustand, Responsive Design, Node.js, Express, Mongo DB, Web
        Accessibility, API:s, mob-programming, pair-programming, branches, Git,
        GitHub - and much more!
      </p>
    </div>
  );
};

{
  /* <Headline text="Tech" level={1} className="tech-h1" /> */
}
