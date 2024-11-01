import './Skills.css'
import { Heading } from '../reusables/Heading'
import { SubHeading } from '../reusables/SubHeading'

export const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills-content-wrapper">
                <div className="heading-wrapper">
                    <Heading
                        heading="Skills"
                        className="skills-heading" />
                </div>
                <div className="skills-box-wrapper">
                    <div className="skills-box">
                        <SubHeading
                            subHeading="Code"
                            className="code" />
                        <div className="skills-list">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>Express.js</p>
                        </div>
                    </div>
                    <div className="skills-box">
                        <SubHeading
                            subHeading="Toolbox"
                            className="toolbox" />
                        <div className="skills-list">
                            <p>Microsoft Word</p>
                            <p>Adobe Photoshop</p>
                            <p>Postman</p>
                            <p>Figma</p>
                            <p>Slack</p>
                        </div>
                    </div>
                    <div className="skills-box">
                        <SubHeading
                            subHeading="Upcoming"
                            className="upcoming" />
                        <div className="skills-list">
                            <p>Mongo DB</p>
                            <p>SOmethin</p>
                        </div>
                    </div>
                    <div className="skills-box">
                        <SubHeading
                            subHeading="More"
                            className="more" />
                        <div className="skills-list">
                            <p>Agile methodology</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills