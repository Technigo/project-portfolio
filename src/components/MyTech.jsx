import { Grid } from "./ui/Grid";
import "./MyBio.css";

export const TechSection = () => (
  <Grid background="black">
    <div className="tech-title"><h2>Tech</h2></div>
    <div className="tech-description">
      <p>HTML, CSS, Flexbox, JavaScript, ES6,
        JSX, React, React Hooks, Node.js,
        Mongo DB, Web Accessibility, APIs,
        mob-programming, pair-programming, GitHub. </p>
    </div>
  </Grid>
);
