import { LinkButton } from "./LinkButton";

export const Links = () => {
  return (
    <div>
      <LinkButton
        buttonText="Live Demo"
        url="https://app.netlify.com/" // add path to the specific deploy
        icon="your-live-demo-icon.png" // Add the path to the icon image
      />
      <LinkButton
        buttonText="View the Code"
        url="https://github.com/" // add path to the specific code
        icon="your-github-icon.png" // Add the path to the icon image
      />
      {/* Add more buttons with different icons, texts, and URLs here, for example to articles */}
    </div>
  );
};
