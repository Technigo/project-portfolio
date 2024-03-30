
import { ProjectImage } from "../projectImage/ProjectImages"
import { ProjectName } from "../projectName/ProjectName"
import { Tag } from "../tag/Tag"
export const ProjectWrapper = ({ projectName, projectIntro, topics, demoLink, codeLink }) => {
    const projectHeading = projectName.replaceAll('-', ' ')
    return (
        <div>
            <ProjectImage repo={projectName} url={demoLink} alt={projectName} />
            <ProjectName projectName={projectHeading}/>
            <p>{projectIntro}</p>
            <ul className="tag">
                {topics.map(
                    topic=>
                        topic !== 'portfolio' &&(
                            <Tag key={topic} topic={topic} />
                        )       
                )}
            </ul>
            <p>
                <span>{demoLink}</span><span>{codeLink}</span>
            </p>
        </div>
    )
}
//img -> component
//project name -> component
//project intro -> component
//project tag ->component