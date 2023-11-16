//Skills section with div's and info.

import './skills.css'

export const Skills = () => {
    return (
        <div className="skills-wrap">
            <h1>Skills</h1>
            <div className="skills-wrap-info">
                <div className="code">
                    <h3>Code</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript ES6</li>
                        <li>React</li>
                        <li>.</li>
                    </ul>
                </div>
                <div className="toolbox">
                    <h3>Toolbox</h3>
                    <ul>
                        <li>GitHub</li>
                        <li>Figma</li>
                        <li>Postman</li>
                        <li>Slack</li>
                        <li>Vs Code</li>
                    </ul>
                </div>
                <div className="upcoming">
                    <h3>Upcoming</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>UX</li>
                        <li>.</li>
                        <li>.</li>
                        <li>.</li>
                    </ul>
                </div>
                <div className="more">
                    <h3>More</h3>
                    <ul>
                        <li>Agile</li>
                        <li>Strategy</li>
                        <li>Manager</li>
                        <li>Diversity</li>
                        <li>Health dev.</li>
                    </ul>
                </div></div>
        </div>
    )
}
