import { SectionHead } from "../components/SectionHead.jsx";

export const Tech = () => {
    const headlineId = 2;
    return (
        <div className="tech">
        <SectionHead headlineId={headlineId}/>
        <p>HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, MongoDB, Web Accessibility, API:s, GitHub, mob-programming, pair-programming, code review</p>
    </div>
    );
};