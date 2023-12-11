import { Button } from "../Buttons/Button";
import { FaSlack } from "react-icons/fa";

import "./SocialMediaLinks.css";

export const SocialMediaLinks = () => {
  return (
    <div className="contact-links">
      <Button
        className={`linkedin-button`}
        link={`https://www.linkedin.com/in/anna-robertsson-829967272/`}
        icon={`/assets/GreyLinkedIn.svg.svg`}
        iconAlt={`Clickable icon of the LinkedIn logo`}
      />
      <Button
        className={`github-button`}
        link={`https://github.com/AnnaRobertsson`}
        icon={`/assets/GreyGitHub.svg.svg`}
        iconAlt={`Clickable icon of the GitHub logo`}
      />
      <a
        href={`https://technigo.slack.com/team/U055LN8GBQA`}
        target="_blank"
        rel="noopener noreferrer"
        className="slack-button"
        alt={`Clickable icon of the Slack logo`}
      >
        <FaSlack />
        {/* You might also add a text or an image here */}
      </a>
    </div>
  );
};
