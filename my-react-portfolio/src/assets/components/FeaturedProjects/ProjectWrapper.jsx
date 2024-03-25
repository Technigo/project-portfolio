export const ProjectWrapper = ({projectImg, projectName, projectIntro, projectTags, demoLink, codeLink }) => {
    return (
        <div>
            <img src={projectImg} alt="" /> 
            <p>{projectName}</p>
            <p>{projectIntro}</p>
            <p>{projectTags}</p>
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