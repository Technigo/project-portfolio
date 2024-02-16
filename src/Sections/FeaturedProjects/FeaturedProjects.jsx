import { Project } from "../../Components/Project/Project"
import { projects } from "../../../projects.json"
import "./FeaturedProjects.css"

export const FeaturedProjects = () => {

    return (
        <>
            <div className="grid-parent light">
                <div className="section projects">
                    <h1>Featured Projects</h1>
                    {projects.map(item => (<Project key={item.name} project={item} />))}
                </div>
            </div>
        </>
    )
}