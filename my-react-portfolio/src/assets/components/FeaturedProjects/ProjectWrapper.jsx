// import { BtnLink } from "../smallComps/BtnLink/BtnLink"
// import { Tag } from "../smallComps/tags/Tag"
import { Image } from "../smallComps/Image"
import "./projects.css"
import {Demo} from "../iconfoler/Demo"
import {Code} from "../iconfoler/Code"
import "./iconBtn.css"


export const ProjectWrapper = ({projectImg, projectName, demoLink, codeLink, description, alt}) => {

    return (
      <>
        <div className="card-image">
          <Image image={projectImg} alt={alt} className={"blue"} />
        </div>
        <div className="detail">
          <p className="projectName">{projectName}</p>
          <p className="description">{description}</p>
          {/* <div className="tags">
            <Tag projectTags={projectTags} />
          </div> */}
          
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
      </>
    );
}
//img -> component
//project name -> component
//project intro -> component
//project tag ->component
//alt={alt}
//<p>{projectIntro}</p>

//prop can equals prop, render by different components. it's about prop=prop, not href=prop. check the <Btnlink>
//plus hover svg