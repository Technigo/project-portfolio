import { BigHeadlines } from "../Components/BigHeadlines";

export const Skills = () => {
    const sectionId = 5;

    return (
        <div className="skills">
            <BigHeadlines sectionId={sectionId}/>
            <figure className="code">
                <figcaption>Code</figcaption>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Javascript</li>
                    <li>ES6</li>
                    <li>React</li>
                    <li>Styled Components</li>
                    <li>GitHub</li>
                </ul>
            </figure>
            <figure className="toolbox">
                <figcaption>Toolbox</figcaption>
                <ul>
                    <li>Postman</li>
                    <li>Figma</li>
                    <li>Slack</li>
                    <li>Notion</li>
                </ul>
            </figure>
            <figure className="upcoming">
                <figcaption>Upcoming</figcaption>
                <ul>
                    <li>Node.js</li>
                    <li>Python</li>
                </ul>
            </figure>
            <figure className="more">
                <figcaption>More</figcaption>
                <ul>
                    <li>Project Management</li>
                    <li>Agile Methodology</li>
                </ul>
            </figure>
        </div>
    )
}
