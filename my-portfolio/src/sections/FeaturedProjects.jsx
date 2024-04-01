import { ProjectList } from "../components/ProjectList.jsx";
import { Headline } from "../components/Headline.jsx";

export const FeaturedProjects = () => {
  return (
    <>
      <section className="featured-projects-container">
        <Headline style="project-list-title" title="Featured projects" />
        <ProjectList />
      </section>
      <div className="wavy-border"></div>
    </>
  );
};
