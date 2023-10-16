import { MediumsizedTitle } from '../../reusableComponents/texts/MediumsizedTitle'
import { SectionTitle } from '../../reusableComponents/texts/SectionTitle'
import './Skills.css'

export const Skills = () => {

    const skillsTitle = 'Skills'
    return (

        <section className="skills-section">
            <SectionTitle sectionTitletext={skillsTitle} />
            <div className="skills-flex">
                <div className="code">
                    <MediumsizedTitle mediumHeader={'Code'} />
                    <>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Javascript ES6</li>
                            <li>React</li>
                            <li>Styled Components</li>
                            <li>GitHub</li>

                        </ul>
                    </>
                </div>
                <div className="toolbox">
                    <MediumsizedTitle mediumHeader={'Toolbox'} />
                    <>
                        <ul>
                            <li>Figma</li>
                            <li>Slack</li>
                            <li>Postman</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </>
                </div>
                <div className="upcoming">
                    <MediumsizedTitle mediumHeader={'Upcoming'} />
                    <>
                        <ul>
                            <li>Node.js</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </>
                </div>
                <div className="more">
                    <MediumsizedTitle mediumHeader={'More'} />
                    <>
                        <ul>
                            <li>Agile methology</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </>
                </div>
            </div>
        </section>
    )
}
