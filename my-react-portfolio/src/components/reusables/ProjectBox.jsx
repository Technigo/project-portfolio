import { InfoButton } from './InfoButton.jsx'
import { ProjectImage } from './ProjectImage.jsx'
import { SubHeading } from './SubHeading.jsx'
import { Paragraph } from './Paragraph.jsx'
import { LinkButton } from './LinkButton.jsx'
import './ProjectBox.css'

export const ProjectBox = () => {
    return (
        <section className="box-wrapper">
            <ProjectImage />
            <div className="project-info">
                <SubHeading 
                    subHeading="Project name"
                    className="project-sub" />
                <Paragraph 
                    text="Here is the project info"
                    className="project-text" />
                    <div className="info-buttons">
                        <InfoButton 
                            buttonText="HTML"
                            className="info-button" />
                        <InfoButton
                            buttonText="CSS"
                            className="info-button" />
                    </div>
                    <div className="link-buttons">
                        <LinkButton
                            className="live-demo"
                            buttonText="Live demo" />
                        <LinkButton 
                            className="view-live"
                            buttonText="View the code" />
                    </div>
            </div>
        </section>
    )
}