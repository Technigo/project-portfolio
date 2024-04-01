
import "./Technologies.css";

export const Technologies = () => {
  const technologies = `HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming, Github`;

  return (
    <section className="technologyWrapper">
      <h2 className="techTitle">Tech</h2>

      <p className="techCopy">{technologies}</p>
    </section>
  );
};
