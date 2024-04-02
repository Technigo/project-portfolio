import { useState, useEffect } from "react";
import { PortfolioImages } from "./PortfolioImages";
import { fetchProjects } from "./Utility";
import "./Projects.css";

// Projects component fetches data from the GitHub API and displays the projects in the portfolio.
export const Projects = () => {
  const [projects, setProjectList] = useState([]);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  // lets keep the portfolio fresh! - returns a list of repositories created since the beginning of the current year.
  const url = `https://api.github.com/users/kathinka/repos?per_page=100&since=${currentYear}-01-01T00:00:00Z`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await fetchProjects(url);
        setProjectList(projects);
      } catch (error) {
        <alert>Oh no! I failed to fetch any projects😅 - please try again🙏🏽</alert>
      }
    };

    fetchData();
    //unless we change the API url, we wont refetch the data every time the component re-renders.
    //could change if we want to add pagination or a button to fetch more projects in the future.
  }, [url]);

  // lets save bandwidth and makes the app faster and only get what we need from the API.
  //destructuring the data we need from the API response.
  const projectObject = projects.map(({ id, name, html_url, description, language, created_at, updated_at, pushed_at, full_name, homepage, topics, stargazers_count }) => ({
    id,
    name,
    html_url,
    description,
    language,
    created_at,
    updated_at,
    pushed_at,
    full_name,
    homepage,
    topics,
    stargazers_count,
  }));

  //filtering out the projects that have no stars, as for now I have chosen that as my filter for what goes into the portfolio. later I will potentiall use a different filter, ect. only show projects that have been updated in the last x months/years etc.
  const starredProjects = projectObject.filter((project) => project.stargazers_count > 0);



  return (
    <section className="center-wrap">
      <div className="project-wrap">
        <h2>Featured Projects</h2>

        <div className="featured-project">

          {//sorting the projects so I get the most recently updated projects displayed first.
            starredProjects
              .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
              .map(({ id, name, description, homepage, html_url, topics }) => (
                <div className="project" key={id}>
                  {/* comparing the Ids in PortofolioImages with the Ids in the API response to get the correct image for each project.
              */}
                  <picture className="border" >
                    <source srcSet={PortfolioImages.find((image) => image.id === id)?.webp}
                      alt={name} type="image/webp" />
                    <source srcSet={PortfolioImages.find((image) => image.id === id)?.url}
                      alt={name} type="image/png" />
                    <img className="project-image"
                      src={PortfolioImages.find((image) => image.id === id)?.url}
                      alt={name}
                    />
                  </picture>
                  {/* comparing the Ids in PortofolioImages with the Ids in the API response to display a "prettier" name for each project. */}
                  <article className="project-info">
                    <h3>{PortfolioImages.find((name) => name.id === id)?.prettyname}</h3>
                    <p>{description}</p>
                    {/* mapping over the topics array to display the topics for each project. */}
                    <div className="tag-wrap">
                      {topics.map((topic, index) => (

                        <div className="tag" key={index}>{topic}</div>

                      ))}
                    </div>
                    <div className="button-container">
                      <div className="btn-left">
                        <a href={homepage} alt={`${name} site`} rel="noopener noreferrer" target="_blank">
                          <button className="live" aria-label="Live Demo" alt={`${name} site`}>
                            <span className="visually-hidden">Live Demo</span>
                          </button>
                        </a>
                      </div>
                      <div className="btn-right">
                        <a href={html_url} alt="github site" rel="noopener noreferrer" target="_blank">
                          <button className="github" aria-label="View Code" alt="view code on github">
                            <span className="visually-hidden">View Code</span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};
