import { Socials } from "./Socials";
import "./Socialbar.css";

export const Socialbar = () => {
  return (
    <div className="socialbar">
      {Socials.map((social) => (
        <div className="socials" key={social.id}>
          <a href={social.url}>
            <img className="some" src={social.img} alt={social.name} aria-label={social.name} />
          </a>
        </div>
      ))}
    </div>
  );
};
