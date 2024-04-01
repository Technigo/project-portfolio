import { ScrollDown } from "../ScrollButtons/ScrollButtons";

export const Tech = () => {
  return (
    <section id="tech">
      <div>
        <h2>Tech</h2>
      </div>
      <div>
        <p>
          HTML, CSS, JavaScript, ES6, JSX, React Node.js, Mongo DB, Web
          Accessibility, APIs, mob-programming, pair-programming
        </p>
      </div>
      <ScrollDown scrollTo="projects" />
    </section>
  );
};
