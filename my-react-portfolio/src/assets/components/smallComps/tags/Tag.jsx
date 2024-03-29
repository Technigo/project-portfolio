import "./tags.css"
import data from "../../../../../projects.json"
export const Tag = () => {

    const projects = data.projects

    return (
        projects.map(project => {
            project.tags.map(tag => {
                console.log(tag);
                <p key={tag} className="tag">{tag}</p>
            })
        })
    )
}

//need to add mamually