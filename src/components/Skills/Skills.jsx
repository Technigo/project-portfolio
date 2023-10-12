import "./skills.css";

export const Skills = () => {
    return (
        <section className="skills-wrapper">
            

        <h1 className="h1-skills">Skills</h1>
        <section className="textskills-wrapper">
        <section className="code-wrapper">
            <span>
        <h3 className="h3-code">Code</h3>
        </span>
        <section className="code-list">
            <ul>HTML5</ul>
            <ul>CSS3</ul>
            <ul>Javascript ES6</ul>
            <ul>React</ul>
            <ul>Styled Components</ul>
            <ul>GitHub</ul>
        </section>
        </section>

        <section className="toolbox-wrapper">
        <h3 className="h3-toolbox">ToolBox</h3>
        <section className="toolbox-list">
            <ul>Atom</ul>
            <ul>Postman</ul>
            <ul>Adobe Photoshop</ul>
            <ul>Adobe Illustrator</ul>
            <ul>Figma</ul>
            <ul>Keynote</ul>
            <ul>Slack</ul>
        </section>
        </section>

        <section className="upcoming-wrapper">
        <h3 className="h3-upcoming">Upcoming</h3>
        <section className="upcoming-list">
             <ul>Node.js</ul>
        </section>
        </section>

        <section className="more-wrapper">
        <h3 className="h3-more">More</h3>
        <section className="more-list">
             <ul>hej</ul>
             <ul>hej</ul>
        </section>
        </section>
        </section>
        </section>
    )
}