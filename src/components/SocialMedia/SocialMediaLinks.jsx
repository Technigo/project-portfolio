import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";

import "./SocialMediaLinks.css";

export const SocialMediaLinks = ({ className }) => {
  return (
    <div className={className}>
      <a
        href={`https://www.linkedin.com/in/anna-robertsson-829967272/`}
        target="_blank"
        rel="noopener noreferrer"
        className={"linkedin-button"}
        alt={`Clickable icon of the LinkedIn logo`}
      >
        <FaLinkedinIn />
      </a>
      <a
        href={`https://github.com/AnnaRobertsson`}
        target="_blank"
        rel="noopener noreferrer"
        className={"github-button"}
        alt={`Clickable icon of the GitHub logo`}
      >
        <FaGithub />
      </a>
      <a
        href={`https://technigo.slack.com/team/U055LN8GBQA`}
        target="_blank"
        rel="noopener noreferrer"
        className={"slack-button"}
        alt={`Clickable icon of the Slack logo`}
      >
        <FaSlack />
      </a>
    </div>
  );
};
