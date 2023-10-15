import { InfoButton } from './InfoButton.jsx'
import { ProjectImage } from './ProjectImage.jsx'
import { SubHeading } from './SubHeading.jsx'
import { Paragraph } from './Paragraph.jsx'
import { LinkButton } from './LinkButton.jsx'
import './ProjectBox.css'
import { useState, useEffect } from 'react'

export const ProjectBox = () => {
    const [gitProjects, setGitProjects] = useState([])
  
    const gitHubAPI = "https://api.github.com/users/olgalepisto/repos"
  
    const sortedbyPush =
      "https://api.github.com/users/olgalepisto/repos?sort=pushed_at"
  
    const formatName = (name) => {
      let formattedName = name.split("-").join(" ")
  
      const upperCase = formattedName.split(" ")
      for (var i = 0; i < upperCase.length; i++) {
        upperCase[i] = upperCase[i].charAt(0).toUpperCase() + upperCase[i].slice(1)
      }
  
      const upperCaseName = upperCase.join(" ")
  
      return upperCaseName;

    };
  
    useEffect(() => {
      listProjects();
    }, []);
  
    const listProjects = () => {
      fetch(sortedbyPush)
        .then((response) => response.json())
        .then((data) => {
          setGitProjects(data);
        })
        .catch((error) => console.error("Failed to fetch info", error));
    };
  
    let first6Gits = gitProjects.slice(0, 6);

    return (
        <section className="project-list" key={gitProjects._id}>
                {first6Gits.map((gitProject) => (
                    <div className="box-wrapper">
                        <div class="img-container">
                            <ProjectImage />
                        </div>
                        <div className="project-info" key={gitProject._id}>
                            <div className="project-headings">
                                <SubHeading 
                                    subHeading={formatName(gitProject.name)}
                                    className="project-sub" />
                                <Paragraph 
                                    text={gitProject.description}
                                    className="project-text" />
                            </div>
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
                                    buttonText="Live demo"
                                    url={gitProject.homepage} />
                                <LinkButton 
                                    className="view-live"
                                    buttonText="View the code" />
                            </div>
                        </div>
                    </div>
            ))}
        </section>
    )
}