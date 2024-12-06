import "./FeaturedProjects.css";
import { ProjectCard } from "./ProjectCard";
import projectData from "../projects.json";
import { SeeMoreButton } from "./SeeMoreButton";


export const FeaturedProjects = () => {
	return (
		<section className="featured-projects">
			<div className="featured-projects-box">
				<h2>Featured Projects</h2>
				{projectData.projects.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.name}
						image={project.image}
						tags={project.tags}
						description={project.description}
						netlifyUrl={project.netlify}
						githubUrl={project.github}
					/>
				))}
				<SeeMoreButton text="See More Projects" url="#" variant="projects" />
			</div>
		</section>
	);
};
