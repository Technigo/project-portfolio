import { useState, useEffect } from "react";
import { PortfolioImages } from "./PortfolioImages";
import { fetchProjects } from "./Utility";
import noImage from "../../public/assets/Projectimages/noimage.jpg";

// Component for displaying project images
const ProjectImage = ({ id, name }) => {
  const image = PortfolioImages.find((image) => image.id === id) || {};
  return (
    <>
      {image.webp ? (
        <>
          <source srcSet={image.webp} alt={name} type="image/webp" />
          <source srcSet={image.url} alt={name} type="image/png" />
          <img className="project-image" src={image.url} alt={name} />
        </>
      ) : (
        <img className="project-image" src={noImage} alt={name} />
      )}
    </>
  );
};

export const Projects = () => {
  const [message, setMessage] = useState("");
  const [projectsList, setProjectList] = useState([]);
  const currentYear = new Date().getFullYear();
  const url = `https://api.github.com/users/kathinka/repos?per_page=100&since=${currentYear}-01-01T00:00:00Z`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await fetchProjects(url);
        setProjectList(projects);
      } catch (error) {
        setMessage("Failed to fetch projects 😔");
      }
    };
    fetchData();
  }, [url]);

  const websiteProjects = projectsList
    .filter(({ homepage }) => homepage)
    .map((project) => ({
      ...project,
      image: PortfolioImages.find((image) => image.id === project.id) || {},
    }))
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

  return (
    <div className="project-wrap">
      <h2>Featured Projects</h2>
      {message && <p>{message}</p>}
      {websiteProjects.map(({ id, name, description, homepage, html_url, topics, image }) => (
        <div className="project" key={id}>
          <picture>
            <ProjectImage id={id} name={name} />
          </picture>
          <article className="project-info">
            <h3>{image.prettyname || name}</h3>
            <p>{description}</p>
            <div className="tag-wrap">
              {topics.map((topic, index) => (
                <div className="tag" key={index}>{topic}</div>
              ))}
            </div>
            <div className="button-container">
              <a href={homepage} rel="noopener noreferrer" target="_blank">
                <button className="live" aria-label={`Live Demo of ${name}`}>
                  <span className="visually-hidden">Live Demo</span></button>
              </a>
              <a href={html_url} rel="noopener noreferrer" target="_blank">
                <button className="github" aria-label={`View code of ${name} on GitHub`}>
                  <span className="visually-hidden">View Code</span></button>
              </a>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};