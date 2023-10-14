import { LinkButton } from "LinkButton";

export const Links = () => {
  return (
    <div>
      <LinkButton
        buttonText="Live Demo"
        url="https://app.netlify.com/" // Add the path to the specific deploy
        icon="your-live-demo-icon.png" // Add the path to the icon image
      />
      <LinkButton
        buttonText="View the Code"
        url="https://github.com/EmmyLJ/"
        icon="your-github-icon.png"
      />
      <LinkButton
        buttonText="Instagram"
        url="https://www.instagram.com/emmy.linneaa/"
        icon="./Icons/instagram(1).png"
      />
    </div>
  );
};
