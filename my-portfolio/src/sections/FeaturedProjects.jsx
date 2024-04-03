import { ProjectList } from "../components/ProjectList.jsx";
import { Headline } from "../components/Headline.jsx";

export const FeaturedProjects = () => {
  return (
    <div className="featured-projects-container">
      <section className="featured-projects-content-container">
        <Headline style="project-list-title" title="Featured projects" />
        <ProjectList />
      </section>
    </div>
  );
};
