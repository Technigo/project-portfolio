import Github from '../assets/github.svg';
import GithubHover from '../assets/github-hover.svg';
import Insta from '../assets/instagram.svg';
import Instahover from '../assets/instagram-hover.svg';
import Linkedin from '../assets/linkedin.svg';
import Linkedinhover from '../assets/linkedin-hover.svg';
import Stack from '../assets/stackoverflow.svg';
import Stackhover from '../assets/stackoverflow-hover.svg';
import { LinkButton } from './LinkButton';
import './IconLinks.css';

export const IconLinks = () => {
  return (
    <div className="icon-button">
      <LinkButton
        className="github-icon"
        buttonText=""
        url="https://github.com/FridafridaL"
        icon={Github}
        hoverIcon={GithubHover}
        alt="Github-button"
      />

      {/* <LinkButton
        className="insta-icon"
        buttonText=""
        url="https://www.instagram.com/fridafridal/"
        icon={Insta}
        hoverIcon={Instahover}
        alt="Instagram-button"
      /> */}

      <LinkButton
        buttonText=""
        url="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
        icon={Linkedin}
        hoverIcon={Linkedinhover}
        alt="Linkedin-button"
      />

      <LinkButton
        buttonText=""
        url="https://stackoverflowteams.com/c/technigo/users/479/?tab=profile"
        icon={Stack}
        hoverIcon={Stackhover}
        alt="Stack overflow-button"
      />
    </div>
  );
};
