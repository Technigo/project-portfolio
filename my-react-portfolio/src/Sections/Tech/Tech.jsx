import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";
import { LargeText } from "../../ReusableComponents/Texts/LargeText";

export const Tech = () => {
  const techText =
    "HTML, CSS, Flexbox, Grids, JavaScript, ES7, JSX, React, React Hooks, Node.js, Npm, Web Accessibility, APIs, mob-programming, pair-programming, GitHub.";
  return (
    <section className="tech">
      <MainTitle className={"tech-text"} text={"Tech"} />
      <LargeText text={techText} />
    </section>
  );
};
