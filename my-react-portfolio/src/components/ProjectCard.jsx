import projects from "../Libraries/projects.json";
import netlify from "../assets/icon/Ic-Web.svg";
import github from "../assets/icon/Ic-Github.svg";

export const ProjectCard = () => {

  return (
    <>
      {projects.projects.map((item) => (
          <div className="project-card" key={item.id}>
              <div className="links-container">
              <a href={item.netlify} target="_blank"> <img id="project-img" src={item.image} alt={item.name}/></a>
              <div className="links">
                  <a href={item.netlify} target="_blank"><img src={netlify} alt="button for viewing site" className="button"/>Live demo</a>
                  <a href={item.github} target="_blank"><img src={github} alt="button to view in github" className="button"/>View the code</a>
                  </div>
              </div>
          <div className="description">
              <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <ul className="tags">
                  {item.tags.map((tag, index) => (
                      <li className="tag" key={index}>{tag}</li>
                  ))}
                  </ul>
              </div>
          </div>
      ))}
    </>
  )
}

