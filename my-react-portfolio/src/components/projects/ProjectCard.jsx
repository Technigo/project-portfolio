import localProjectsData from "./projects.json";
import { Header } from "../common/Header";
import { Paragraph } from "../common/Paragraph";
import { Label } from "../common/Label";
import { Button } from "../common/Button";
import { Image } from "../common/Image";
import { useState } from "react";
import "./projects.css";

export const ProjectCard = ({ repositories }) => {
  //state to track the number of cards to display
  const [visibleCards, setVisisbleCards] = useState(5);

  // Filter and match repositories with data in projects.json
  const filteredRepos = repositories.filter((repo) => {
    return localProjectsData.projects.some(
      (data) => data.repoName === repo.name
    );
  });
  //This checks if a project name (repo.name) from the repositories array exists in any of the project names (data.repoName) within repoData.projects.

  /* // Sort the filtrered repositories
  filteredRepos.sort((a, b) => {
    const aData = localProjectsData.projects.find(
      (data) => data.name === a.name
    );
    const bData = localProjectsData.projects.find(
      (data) => data.name === b.name
    );
    return bData.id - aData.id;
  }); */

  const toggleVisibleCards = () => {
    //show 5 cards or all card based on the current state
    setVisisbleCards((prevVisibleCards) =>
      prevVisibleCards === 5 ? filteredRepos.length : 5
    );
  };

  const showMoreLessLabel = visibleCards === 5 ? "Show More" : "Show Less";

  return (
    <>
      {/* Map over filtered repositories to display project cards */}
      {filteredRepos.slice(0, visibleCards).map((repo) => {
        // Find the corresponding data in repoData.projects based on repoName
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
                text={matchingData.description}
                className="custom-paragraph"
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
                  link={matchingData.netlifyUrl}
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
      <div className="tn-wrapper">
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
