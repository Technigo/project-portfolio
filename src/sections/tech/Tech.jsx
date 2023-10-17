import './tech.css'
import { Heading } from '/src/components/typography/Heading.jsx';
import { Paragraph } from '/src/components/typography/Paragraph.jsx';


export const Tech = () => {
    const techText = "HTML, CSS, Flexbox, Grids, JavaScript, ES7, JSX, React, React Hooks, Node.js, Npm, Web Accessibility, APIs, mob-programming, pair-programming, GitHub."

    return (
        <section className="tech">
            <section className='tech-wrapper'>
                <Heading level={1} text="Tech" className="tech-heading" />
                <Paragraph className={'tech-p'} text={techText} />
            </section>
        </section>
    );
};