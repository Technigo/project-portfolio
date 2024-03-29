import { BtnLink } from "../smallComps/BtnLink/BtnLink"
// import { Tag } from "../smallComps/tags/Tag"
import { Image } from "../smallComps/Image"
import "./projects.css"

export const ProjectWrapper = ({projectImg, projectName, demoLink, codeLink, description, alt}) => {

    const liveDemoBtn = "../../../public/icons/liveDemo.svg"
    const viewTheCodeBtn = "../../../public/icons/viewTheCode.svg"
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
            <BtnLink
              link={demoLink}
              src={liveDemoBtn}
              alt={"demo link"}
              btnContent={"Live demo"}
              btnName={"codeBtn"}
            />
            <BtnLink
              link={codeLink}
              src={viewTheCodeBtn}
              alt={"code link"}
              btnContent={"View the code"}
              btnName={"linkBtn"}
            />
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