import { BtnLink } from "../smallComps/BtnLink"
import { PageTopic } from "../smallComps/PageTopic"
import { Tag } from "../smallComps/Tag"
import { Image } from "../smallComps/Image"



export const ProjectWrapper = ({projectImg, projectName, projectTags, demoLink, codeLink, about, alt }) => {

    const liveDemoBtn = "../../../public/icons/liveDemo.svg"
    const viewTheCodeBtn = "../../../public/icons/viewTheCode.svg"
    return (
        <>
          <PageTopic pageTopic={'PROJECTS'}/>
        <div className="project-wrapper">
            <Image image={projectImg} alt={alt} />
            <p className="projectName">{projectName}</p>
            <p className="about">{about}</p>
            <Tag projectTags={projectTags} />
            <div className="btn">
                <BtnLink link={demoLink} src={liveDemoBtn} alt={'demo link'} btnContent={'Live demo'} />
                <BtnLink link={codeLink} src={viewTheCodeBtn} alt={'code link'} btnContent={'View the code'} />
            </div>
        </div>
        </> 
    )
}
//img -> component
//project name -> component
//project intro -> component
//project tag ->component
//alt={alt}
//<p>{projectIntro}</p>

//prop can equals prop, render by different components. it's about prop=prop, not href=prop. check the <Btnlink>
//plus hover svg