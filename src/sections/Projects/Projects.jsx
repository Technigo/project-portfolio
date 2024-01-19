import { Project } from "../../components/Project/Project";
import "./Projects.css";

export const Projects = ({ projectData }) => {
  console.log("Project Data:", projectData);
  let repoData = projectData;
  return (
    <div className="featured-projects-container">
      <div className="featured-projects">
        <h1 className="featured-projects-title">Featured Projects</h1>
        {repoData &&
          repoData.map(
            (item) =>
              item && (
                <Project
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  gitLink={item.html_url}
                  deployedLink={item.homepage}
                  tags={item.topics}
                />
              )
          )}
      </div>
    </div>
  );
};
