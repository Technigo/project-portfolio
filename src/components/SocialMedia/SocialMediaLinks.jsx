import { FaLinkedinIn, FaGithub, FaSlack } from "react-icons/fa";
import "./SocialMediaLinks.css";

export const SocialMediaLinks = ({ className }) => {
  return (
    <div className={className}>
      <a
        href={`https://www.linkedin.com/in/anna-robertsson-829967272/`}
        target="_blank"
        rel="noopener noreferrer"
        className={"linkedin-button"}
        aria-label={`LinkedIn Profile`}
      >
        <FaLinkedinIn aria-hidden="true" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a
        href={`https://github.com/AnnaRobertsson`}
        target="_blank"
        rel="noopener noreferrer"
        className={"github-button"}
        aria-label={`GitHub Profile`}
      >
        <FaGithub aria-hidden="true" />
        <span className="sr-only">GitHub</span>
      </a>
      <a
        href={`https://technigo.slack.com/team/U055LN8GBQA`}
        target="_blank"
        rel="noopener noreferrer"
        className={"slack-button"}
        aria-label={`Technigo Slack Team`}
      >
        <FaSlack aria-hidden="true" />
        <span className="sr-only">Slack</span>
      </a>
    </div>
  );
};
