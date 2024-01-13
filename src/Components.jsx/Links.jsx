import { LinkButton } from "LinkButton";

// The links that are connected to each button //
export const Links = () => {
  return (
    <div>
      <LinkButton
        buttonText="Instagram"
        url="https://www.instagram.com/emmy.linneaa/"
        icon="./public/instagram(1).png"
      />
      <LinkButton
        buttonText="Linkedin"
        url="https://www.linkedin.com/in/emmy-jansson-2104a3293/"
        icon="./public/linkedin.png"
      />
      <LinkButton
        buttonText=""
        url="https://stackoverflowteams.com/c/technigo/users/520/?tab=profile"
        icon="./public/stackoverflow.png"
      />
    </div>
  );
};
