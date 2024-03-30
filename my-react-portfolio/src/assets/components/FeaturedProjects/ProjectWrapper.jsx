
import { ProjectName } from "../projectName/ProjectName"
import { Tag } from "../tag/Tag"
export const ProjectWrapper = ({ projectName, projectIntro, topics, demoLink, codeLink }) => {
    const projectHeading = projectName.replaceAll('-', ' ')
    return (
        <div>
            {/* <img src={projectImg} alt="" />  */}
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