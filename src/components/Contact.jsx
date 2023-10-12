import { ContactIcon } from "./reuseCompoents/ContactIcon";
import "./styleComponents/contact.css";
export const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This provides a smooth scrolling effect
    });
  };
  return (
    <div className="contact-container" aria-label="Contact Information">
      <div className="contact-title">
        <h1>Let's Talk</h1>
      </div>
      <div className="contact-details">
        <p>Huadan Zhu</p>
        <p>+46(0)762 87 66 74</p>
        <a href="mailto:zhuhuadan@gmail.com">
          <p>Send Me An Email</p>
        </a>
      </div>

      <div className="contact-bottom-icons">
        <ContactIcon />
      </div>
      <button
        type="button"
        role="back to top"
        onClick={scrollToTop}
        className="back"
        aria-label="Back to Top"
      >
        Back To Top
      </button>
    </div>
  );
};
