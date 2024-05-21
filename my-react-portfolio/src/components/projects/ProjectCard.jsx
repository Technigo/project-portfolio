import localProjectsData from "./projects.json";
import { Header } from "../common/Header";
import { Paragraph } from "../common/Paragraph";
import { Label } from "../common/Label";
import { Button } from "../common/Button";
import { Image } from "../common/Image";
import { useState } from "react";
import "./projects.css";

export const ProjectCard = ({ repositories }) => {
  // Filter and match repositories with data in projects.json
  const filteredRepos = repositories.filter((repo) =>
    repo.name.startsWith("project")
  );
  const [visibleCards, setVisibleCards] = useState(5);

  //This checks if a project name (repo.name) from the repositories array exists in any of the project names (data.repoName) within repoData.projects.

  // Sort the filtered repositories based on their order in projects.json
  filteredRepos.sort((a, b) => {
    const indexA = localProjectsData.projects.findIndex(
      (data) => data.repoName === a.name
    );
    const indexB = localProjectsData.projects.findIndex(
      (data) => data.repoName === b.name
    );
    return indexA - indexB;
  });

  const toggleVisibleCards = () => {
    setVisibleCards((prevVisibleCards) =>
      prevVisibleCards === 5 ? filteredRepos.length : 5
    );
  };

  const showMoreLessLabel = visibleCards === 5 ? "Show More" : "Show Less";

  return (
    <>
      {/* Map over filtered repositories to display project cards */}
      {filteredRepos.slice(0, visibleCards).map((repo) => {
        // Find the corresponding data in localProjectsData.projects based on repoName
        const matchingData = localProjectsData.projects.find(
          (data) => data.repoName === repo.name
        );

        //Handle missing data
        if (!matchingData) {
          return null;
        }

        return (
          <article className="project-card" key={matchingData.id}>
            <Image
              sectionClassName={"image"}
              elementClassName={"project-img"}
              src={matchingData.imageUrl}
              alt={`Image of ${matchingData.displayName} project`}
            />
            <div className="project-text-section">
              <Header
                level={3}
                text={matchingData.displayName}
                aria-label="This is the main heading"
                className="project-card-heading"
              />
              <Paragraph
                text={repo.description}
                className="project-paragraph"
              />

              {/* Displaying tags */}
              <div role="group" aria-label="Project Tags" className="tags">
                {matchingData.tags.map((tag, index) => (
                  <Label key={index} tagText={tag} />
                ))}
              </div>

              <div className="button-wrapper">
                <Button
                  icon="/icons/live-demo.svg"
                  label="Live demo"
                  link={repo.homepage}
                  className="netlify-btn"
                />
                <Button
                  icon="/icons/github.svg"
                  label="View the code"
                  link={repo.svn_url} // Retrieve GitHub link from the API
                  className="github-btn"
                />
              </div>
            </div>
          </article>
        );
      })}
      {/* Button to toggle visibility of project cards */}
      <div className="btn-wrapper">
        <Button
          label={showMoreLessLabel}
          className="show-more-btn"
          onClick={toggleVisibleCards}
          ariaLabel={showMoreLessLabel}
        />
      </div>
    </>
  );
};
