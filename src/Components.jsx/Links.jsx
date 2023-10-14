import { LinkButton } from "LinkButton";

export const Links = () => {
  return (
    <div>
      <LinkButton
        buttonText="Live Demo"
        url="https://app.netlify.com/" // Add the path to the specific deploy
        icon="Live-Demo-Button.png" // Add the path to the icon image
      />
      <LinkButton
        buttonText="View the Code"
        url="https://github.com/EmmyLJ/"
        icon="View-Code-Button.png"
      />
      <LinkButton
        buttonText="Instagram"
        url="https://www.instagram.com/emmy.linneaa/"
        icon="./Icons/instagram(1).png"
      />
      <LinkButton
        buttonText="Linkedin"
        url="https://www.linkedin.com/in/emmy-jansson-2104a3293/"
        icon="./src/Icons/linkedin.png"
      />
      <LinkButton
        buttonText=""
        url="https://stackoverflowteams.com/c/technigo/users/520/?tab=profile"
        icon="./src/Icons/stackoverflow.png"
      />
    </div>
  );
};
