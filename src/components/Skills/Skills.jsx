import React from 'react';
import { Headline } from '../Headline/Headline';
import './Skills.css';

export const Skills = () => {
    return (
        <div className="skills-container">
            <Headline className="headline" text="Skills" level={1} />
            <div className="content">
                <section>
                    <h3 data-title="code">Code</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript ES6</li>
                        <li>React</li>
                        <li>Styled Components</li>
                        <li>GitHub</li>
                    </ul>
                </section>
                <section>
                    <h3 data-title="toolbox">Toolbox</h3>
                    <ul>
                        <li>Atom</li>
                        <li>Postman</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>Figma</li>
                        <li>Keynote</li>
                        <li>Slack</li>
                    </ul>
                </section>
                <section>
                    <h3 data-title="upcoming">Upcoming</h3>
                    <ul>
                        <li>Node.js</li>
                    </ul>
                </section>
                <section>
                    <h3 data-title="more">More</h3>
                    <ul>
                        <li>Design Lead</li>
                        <li>Branding</li>
                        <li>Strategy</li>
                        <li>Process design</li>
                        <li>Concept development</li>
                        <li>Agile methodology</li>
                        <li>Hyper Island toolbox</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
