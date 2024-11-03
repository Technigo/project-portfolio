// ContactInfo.jsx

import { SocialLinks } from "../../../components/SocialLinks/SocialLinks";
import "./ContactInfo.css"

export const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <div className="contact-info">
        <h2>
          Let’s talk
        </h2>

        <div>
          <h3>
            Emelie Nyberg Kedert
          </h3>

          <h3>
            +46(0)737 53 83 11
          </h3>

          <h3>
            emelie.kedert@gmail.com
          </h3>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};