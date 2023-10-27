import { BigHeadlines } from "../Components/BigHeadlines";

import "./Skills.css";

export const Skills = () => {
    const sectionId = 5;

    return (
        <div className="skills-wrapper">
            <BigHeadlines sectionId={sectionId}/>
            <div className="skill-details">
                <figure>
                    <figcaption className="code">Code</figcaption>
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
                <figure>
                    <figcaption className="toolbox">Toolbox</figcaption>
                    <ul>
                        <li>Postman</li>
                        <li>Figma</li>
                        <li>Slack</li>
                        <li>Notion</li>
                    </ul>
                </figure>
                <figure>
                    <figcaption className="upcoming">Upcoming</figcaption>
                    <ul>
                        <li>Node.js</li>
                        <li>Python</li>
                    </ul>
                </figure>
                <figure>
                    <figcaption className="more">More</figcaption>
                    <ul>
                        <li>Project Management</li>
                        <li>Agile Methodology</li>
                    </ul>
                </figure>
            </div>
        </div>
    )
}
