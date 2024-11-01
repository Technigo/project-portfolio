/* eslint-disable react/prop-types */
import "./Projects.css";
import { useState } from "react";
import repoData from "./repo-data.json";
import { Heading } from "/src/components/typography/Heading.jsx";
import { Image } from "/src/components/images/Image.jsx";
import { Tag } from "/src/components/typography/Tag.jsx";
import { Paragraph } from "/src/components/typography/Paragraph.jsx";
import { Button } from "/src/components/button/Button.jsx";

export const ProjectCard = ({ repositories }) => {
  // State to track the number of cards to display
  const [visibleCards, setVisibleCards] = useState(5);

  // Filter and match repositories with data in repoData.projects
  const filteredRepos = repositories.filter((repo) => {
    return repoData.projects.some((data) => data.repoName === repo.name);
  });

  // Sort the filtered repositories by their id (highest first)
  filteredRepos.sort((a, b) => {
    const aData = repoData.projects.find((data) => data.repoName === a.name);
    const bData = repoData.projects.find((data) => data.repoName === b.name);
    return bData.id - aData.id;
  });

  const toggleVisibleCards = () => {
    setVisibleCards((prevVisibleCards) =>
      prevVisibleCards === 5 ? filteredRepos.length : 5
    );
  };

  const showMoreLessLabel = visibleCards === 5 ? "Show More" : "Show Less";

  return (
    <>
      {filteredRepos.slice(0, visibleCards).map((repo) => {
        console.log("Topics for repo:", repo.name, repo.topics); // Debugging line

        const matchingData = repoData.projects.find(
          (data) => data.repoName === repo.name
        );

        if (!matchingData) {
          return null;
        }

        return (
          <article className="project-card" key={matchingData.id}>
            <Image
              sectionClassName={"image"}
              elementClassName={"project-img"}
              link={matchingData.imageUrl}
              ImageAltText={`Image of ${matchingData.publicName} project`}
            />
            <div className="project-text-section">
              <Heading
                level={3}
                text={matchingData.publicName}
                aria-label="This is the main heading"
                className="project-card-heading"
              />
              <Paragraph text={repo.description} />
              <div role="tag" aria-label="Tags" className="tags">
                {repo.topics &&
                  repo.topics.map((topic, index) => (
                    <Tag key={index} tagText={topic} />
                  ))}
              </div>
              <div className="button-wrapper">
                <Button
                  icon="/assets/icons/live-demo.svg"
                  label="Live demo"
                  link={matchingData.netlifyUrl}
                  className="netlify-btn"
                />
                <Button
                  icon="/assets/icons/github-btn.svg"
                  label="View the code"
                  link={repo.svn_url}
                  className="github-btn"
                />
              </div>
            </div>
          </article>
        );
      })}
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
