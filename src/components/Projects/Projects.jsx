import "./Projects.css";
import projectData from "./projectdata.jsx";
import netlifyImage from "./assets/netlify-img.png";
import githubImage from "./assets/github-img.png";



export const Projects = () => {
  return (
    <div>
      <h1 className="projects-header">Projects</h1>
      {projectData.map((item) => (
        <div className="projects" key={item.id}>
          <img className="screenshot" src={item.image} alt="screenshot"/>
          <div className="description">
            <h2 className="projects-title">{item.name}</h2>
            <p>{item.description}</p>
            <div className="tags">
              {item.tags.map((tag, index) => (
                <p className="tag" key={index}>
                  {tag}
                </p>
              ))}
            </div>
            <div className="links">
              <a className="link" href={item.netlify} target="_blank">
                <img className="icon" src={netlifyImage} alt="netlifylogo" width="25px"></img> Live demo
              </a>
              <a className="link" href={item.github} target="_blank">
                <img className="icon" src={githubImage} alt="githublogo" width="25px"></img> View the code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
