import './Contact.css';
import linkedinIcon from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import contactImage from '../../assets/contact.jpg';

const Contact = () => {
  return (
    <section className="contact-container">
      <h2 className="contact-heading">Let's Talk</h2>
      <img src={contactImage} alt="Jacqueline Kelly Hunt" className="contact-image" />
      <div className="contact-details">
        <p className="contact-name">Jacqueline Kelly Hunt</p>
        <p className="contact-info">+372 56488815</p>
        <p className="contact-info">jacquelinekelly.hunt@gmail.com</p>
      </div>
      <div className="contact-icons">
        <img src={linkedinIcon} alt="LinkedIn" />
        <img src={githubIcon} alt="GitHub" />
      </div>
    </section>
  );
};

export default Contact;
