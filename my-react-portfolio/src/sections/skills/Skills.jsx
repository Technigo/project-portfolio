import { MediumsizedTitle } from '../../reusableComponents/texts/MediumsizedTitle'
import { SectionTitle } from '../../reusableComponents/texts/SectionTitle'
import './Skills.css'

export const Skills = () => {

    const skillsTitle = 'Skills'
    return (

        <section className="skills-section">
            <SectionTitle sectionTitletext={skillsTitle} />
            <div className="code">
                <MediumsizedTitle mediumHeader={'Code'} />
                <p>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript ES6</li>
                        <li>React</li>
                        <li>Styled Components</li>
                        <li>GitHub</li>

                    </ul>
                </p>
            </div>
            <div className="toolbox">
                <MediumsizedTitle mediumHeader={'Toolbox'} />
                <p>
                    <ul>
                        <li>Figma</li>
                        <li>Slack</li>
                        <li>Postman</li>
                        <li></li>
                        <li></li>
                    </ul>
                </p>
            </div>
            <div className="upcoming">
                <MediumsizedTitle mediumHeader={'Upcoming'} />
                <p>
                    <ul>
                        <li>Node.js</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </p>
            </div>
            <div className="more">
                <MediumsizedTitle mediumHeader={'More'} />
                <p>
                    <ul>
                        <li>Agile methology</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </p>
            </div>
        </section>
    )
}
