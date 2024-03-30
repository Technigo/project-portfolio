import { ProjectImage } from "../projectImage/ProjectImages"
import { ProjectName } from "../projectName/ProjectName"
import { Tag } from "../tag/Tag"
import {Demo} from "../iconfoler/Demo"
import {Code} from "../iconfoler/Code"
import "./iconBtn.css"
import "./projects.css"

export const ProjectWrapper = ({ projectName, projectIntro, topics, demoLink, codeLink }) => {
    const projectHeading = projectName.replaceAll('-', ' ')
    return (
        <div>
            <ProjectImage repo={projectName} url={demoLink} alt={projectName} className={'blue'}/>
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
            <div className="btn"> 
          <div id="liveDemoBtn">
            <a href={demoLink} >
                <Demo />
                Live Demo
              </a>
          </div>
          <div id="viewCodeBtn">
            <a href={codeLink} >
                <Code />
              View the code
              </a>
          </div>
        </div>
        </div>
    )
}