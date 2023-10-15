import './Skills.css'
import { Heading } from '../reusables/Heading'
import { SubHeading } from '../reusables/SubHeading'
import { Paragraph } from '../reusables/Paragraph'

export const Skills = () => {
    return (
        <article className="skills">
            <section className="main-container">
            <section className="skills-wrapper">
                <div class="heading-wrapper">
                    <Heading
                        heading="Skills"
                        className="skills-heading" />
                </div>
                <div className="skills-container">
                    <div className="skills-box">
                        <SubHeading
                            subHeading="Code"
                            className="code" />
                        <Paragraph
                            text="HTML
                                CSS
                                React"
                            className="skills-text" />
                    </div>
                    <div className="skills-box">
                        <SubHeading
                            subHeading="Toolbox"
                            className="toolbox" />
                        <Paragraph
                            text="Word, Adobe Photoshop"
                            className="skills-text" />
                    </div>
                    <div className="skills-box">
                        <SubHeading
                            subHeading="Upcoming"
                            className="upcoming" />
                        <Paragraph
                            text="Node.js"
                            className="skills-text" />
                    </div>
                    <div className="skills-box">
                        <SubHeading
                            subHeading="More"
                            className="more" />
                        <Paragraph
                            text="More more more"
                            className="skills-text" />
                    </div>
                </div>
            </section>
            </section>
        </article>
    )
}