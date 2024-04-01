import { Email } from './Email.jsx';
import { Socialbar } from './Socialbar.jsx';
import './contact.css';

export const Contact = () => {
  const profileImage = "../src/assets/kat.webp";
  const profileImageBackUp = "../src/assets/kat.jpeg";
  return (
    <section className="contact">
      <h2>Let&lsquo;s talk</h2>
      <picture className="profile-image">
                    <source srcSet={profileImage}
                      alt="Kathinka Sewell" type="image/webp" />
                    <source srcSet={profileImageBackUp}
                      alt="Kathinka Sewell" type="image/png" />
                    <img className="profile-image"
                      src={profileImageBackUp}
                      alt="Kathinka Sewell"
                    />
                  </picture>

      <div className="contact-info">
        <h3>Kathinka Sewell</h3>
        <Email />
        <Socialbar />
      </div>
    </section>



  )
}