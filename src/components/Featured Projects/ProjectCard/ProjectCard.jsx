import { SubHeading } from "../../Headings/SubHeading/SubHeading.jsx";
import { Button } from "../../Buttons/Button.jsx";
import "./ProjectCard.css";

export const ProjectCard = ({ className, repo, repoImage }) => {
  const formatRepoName = (name) => {
    // Split the name by hyphens and filter out unwanted words
    const words = name
      .split("-")
      .filter((word) => word !== "vite" && word !== "project");
    // Capitalize each word
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    // Join the capitalized words with spaces
    return capitalizedWords.join(" ");
  };

  // Function to capitalize specific words in a string
  const capitalizeSpecificWords = (text) => {
    return text
      .replace(/\b(html5|css3|api)\b/g, (match) => match.toUpperCase())
      .replace(/(^|\s)([a-z])/g, (match) => match.toUpperCase());
  };

  // Map the topics to create a list of tags
  const tags = repo.topics.map((topic, index) => (
    <span key={index} className="tag">
      {capitalizeSpecificWords(topic)}
    </span>
  ));

  return (
    <li key={repo.id} className={`${className}`}>
      <div className="project-photo-wrapper">
        <img src={repoImage?.imageUrl} alt={repo.name} />
      </div>
      <div className="text-links">
        <div className="project-card-info-wrapper">
          <SubHeading
            text={formatRepoName(repo.name)}
            className={"featured-projects-h3"}
          />
          <p>{repo.description}</p>
          <div className="tag-wrapper">
            <div className="tags">{tags}</div>
          </div>
        </div>
        <div className="link-wrapper">
          <Button
            className={`demo-button`}
            buttonName={`Live demo`}
            link={repo.homepage}
            iconAlt={`Live demo, opening in a new window`}
          />
          <Button
            className={`code-button`}
            buttonName={`View the code`}
            link={repo.html_url}
            iconAlt={`View the code, opening in a new window`}
          />
        </div>
      </div>
    </li>
  );
};
