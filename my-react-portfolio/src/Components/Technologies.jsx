

export const Technologies = () => {
  const technologies = `HTML, CSS, Flexbox, Grids, Tailwind, Styled Components, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming, Github.`;

  return (
    <section className="technology-wrapper">
      <h2 className="tech-title">Tech</h2>

      <p className="tech-copy">{technologies}</p>
    </section>
  );
};
