// Contact.jsx

import { ContactPicture } from "./ContactPicture/ContactPicture";
import { ContactInfo } from "./ContactInfo/ContactInfo";
import "./Contact.css"

export const Contact = () => {
  return (
    <footer className="footer-container">
      <ContactPicture />
      <ContactInfo />
    </footer>
  );
};