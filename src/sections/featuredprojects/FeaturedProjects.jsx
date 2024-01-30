import { ProjectCard } from "../../components/projectcard/ProjectCard";
import "./featuredprojects.css";

export const FeaturedProjects = ({ projectData }) => {
  let repoData = projectData;
  return (
    <div className="featured-projects-container">
      <div className="featured-projects">
        <h2 className="featured-projects-title">Featured Projects</h2>
        {repoData
          ? repoData.map((item) => (
              <ProjectCard
                key={item.id}
                title={item.name}
                description={item.description}
                gitLink={item.html_url}
                deployedLink={item.homepage}
                tags={item.topics}
              />
            ))
          : null}
      </div>
    </div>
  );
};
