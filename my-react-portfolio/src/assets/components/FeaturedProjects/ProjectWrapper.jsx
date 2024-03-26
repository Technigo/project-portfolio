export const ProjectWrapper = ({projectImg, projectName, projectTags, demoLink, codeLink, about, alt }) => {
    return (
        <>
          <h3>WHAT I HAVE DONE SO FAR<br/><span>PROJECTS</span></h3>
        <div>
            <img src={projectImg} alt={alt} className="projectImage"/> 
            <p className="projectName">{projectName}</p>
            <p className="about">{about}</p>
            <p className="tag">{projectTags}</p>
            <p>
                <span className="link-btn"><a href={demoLink}><img src="../../../public/icons/liveDemo.svg"/>Live demo</a></span>
                <span className="link-btn"><a href={codeLink}><img src="../../../public/icons/viewTheCode.svg"/>View the code</a></span>
            </p>
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