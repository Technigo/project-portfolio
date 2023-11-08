import { BigHeadlines } from "../Components/BigHeadlines";
import "./Tech.css";

export const Tech = () => {
  const sectionId = 2;
  return (
    <div className="tech">
        <BigHeadlines sectionId={sectionId}/>
        <p>HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, MongoDB, Web Accessibility, API:s, GitHub, mob-programming, pair-programming, code review</p>
    </div>
  )
}
