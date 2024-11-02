import { Grid } from "../../ui/Grid/Grid"
import { HeaderTwo } from "../../ui/Typography/Typography";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

import "./ProjectsSection.css"

export const ProjectsSection = () => {
    return (
        <Grid background="neutral">
            <section className="projects-section">
                <HeaderTwo>
                    Featured Projects
                </HeaderTwo>
                <ProjectCard></ProjectCard>
            </section>
        </Grid>
    )
}

