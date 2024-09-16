import projects from "../libraries/projects.json"
import netlify from "../assets/live-button.svg"
import github from "../assets/github-button.svg"

export const EachProject = () => {
return(
    <>
        {projects.projects.map((item) => (
            <div className="each-project" key={item.id}>
                <div className="links-container">
                <a href={item.netlify_url} target="_blank"> <img id="project-img" src={item.image} alt={item.name}/></a>
                <div className="links">
                    <a href={item.netlify_url} target="_blank"><img src={netlify} alt="button for viewing site" className="button"/></a>
                    <a href={item.github_url} target="_blank"><img src={github} alt="button to view in github" className="button"/></a>
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
)}
