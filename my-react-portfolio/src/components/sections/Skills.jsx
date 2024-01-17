import './Skills.css'
import { Heading } from '../reusables/Heading'
import { SubHeading } from '../reusables/SubHeading'

export const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills-content-wrapper">
                <div class="heading-wrapper">
                    <Heading
                        heading="Skills"
                        className="skills-heading" />
                </div>
                <div className="skills-box-wrapper">
                    <div className="skills-box">
                        <SubHeading
                            subHeading="Code"
                            className="code" />
                        <p className="skills-list">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Express.js</li>
                            </ul>
                        </p>
                    </div>
                    <div className="skills-box">
                        <SubHeading
                            subHeading="Toolbox"
                            className="toolbox" />
                        <p className="skills-list">
                            <ul>
                                <li>Microsoft Word</li>
                                <li>Adobe Photoshop</li>
                                <li>Postman</li>
                                <li>Figma</li>
                                <li>Slack</li>
                            </ul>
                        </p>
                    </div>
                    <div className="skills-box">
                        <SubHeading
                            subHeading="Upcoming"
                            className="upcoming" />
                        <p className="skills-list">
                            <ul>
                                <li>MongoDB</li>
                            </ul>
                        </p>
                    </div>
                    <div className="skills-box">
                        <SubHeading
                            subHeading="More"
                            className="more" />
                        <p className="skills-list">
                            <ul>
                                <li>Agile methodology</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills