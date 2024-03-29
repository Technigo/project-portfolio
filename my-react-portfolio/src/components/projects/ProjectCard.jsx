import repoData from "./projects.json";
import { Header } from "../common/Header";
import { Paragraph } from "../common/Paragraph";
import { useState } from "react";
import { Button } from "../common/Button";
import { Image } from "../common/Image";

export const ProjectCard = ({ repositories }) => {
  //state to track the number of cards to display
  const [visibleCards, setVisisbleCards] = useState(5);

  // Filter and match repositories with data in projects.json
  const filteredRepos = repositories.filter((repo) => {
    return repoData.projects.some((data) => data.repoName === repo.name);
  });

  filteredRepos.sort((a, b) => {
    const aData = repoData.projects.find((data) => data.name === a.name);
    const bData = repoData.projects.find((data) => data.name === b.name);
    return bData.id - aData.id;
  });

  const toggleVisibleCards = () => {
    //show 5 cards or all card based on the current state
    setVisisbleCards((prevVisibleCards) =>
      prevVisibleCards === 5 ? filteredRepos.length : 5
    );
  };

  const showMoreLessLabel = visibleCards === 5 ? "Show More" : "Show Less";

  return (
    <>
      {filteredRepos.slice(0, visibleCards).map((repo) => {
        const matchingData = repoData.projects.find(
          (data) => data.repoName === repo.name
        );

        if (!matchingData) {
          return null; //Handle missing data
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
                aria-labek="This is the main heading"
                className="project-card-heading"
              />
              <Paragraph text={repo.description} />
            </div>
            <div className="button-wrapper">
              <Button
                icon="public/icons/live-demo.svg"
                label="Live demo"
                link={matchingData.netlifyUrl}
                className="netlify-btn"
              />
              <Button
                icon="public/icons/github.svg"
                label="View the code"
                link={repo.svn_url} // Retrieve GitHub link from the API
                className="github-btn"
              />
            </div>
          </article>
        );
      })}
      <div className="tn-wtrapper">
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
