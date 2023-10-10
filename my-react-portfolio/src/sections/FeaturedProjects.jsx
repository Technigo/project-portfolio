import { ProjectCard } from "../components/projectcard/ProjectCard";

export const FeaturedProjects = ({ projectData }) => {
  let repoData = projectData;
  console.log(repoData);
  return (
    <div>
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
  );
};
