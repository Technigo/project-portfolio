import "./FeaturedProjects.css";
import { FpCard } from "./FpCard";

export const FeaturedProjects = () => {
  return (
    <section className="featured-projects">
      <div className="featured-projects-box">
        <h1>Featured Projects</h1>
        <FpCard />
      </div>
    </section>
  );
};
