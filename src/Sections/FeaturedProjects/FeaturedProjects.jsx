import { Project } from "../../Sections/Project/Project"
import { projects } from "../../../projects.json"

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