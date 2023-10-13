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
                <SubHeading />
                <Paragraph />
                <InfoButton />
                <LinkButton
                    className="project-button"
                    buttonText="testing" />
            </div>
        </section>
    )
}