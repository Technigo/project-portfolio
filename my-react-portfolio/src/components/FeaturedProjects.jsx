import "./FeaturedProjects.css";
import { FpChild } from "./child-components/FpChild";

export const FeaturedProjects = () => {
  return (
    <section className="featured-projects">
      <div className="featured-projects-box">
        <h1>Featured Projects</h1>
        <FpChild />
      </div>
    </section>
  );
};
