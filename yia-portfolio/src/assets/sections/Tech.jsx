import { SectionHead } from "./components/SectionHead";

export const Tech = () => {
    const headlineId = 2;
    return (
        <div className="tech">
        <BigHeadlines sectionId={sectionId}/>
        <p>HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, MongoDB, Web Accessibility, API:s, GitHub, mob-programming, pair-programming, code review</p>
    </div>
    );
};