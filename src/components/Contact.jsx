import React from 'react';
import './Contact.css';

const Contact = ({ photo, name, phone, email, socialLinks }) => (
  <section className="contact-section">
    <h2>Let’s Talk</h2>
    <img src={photo} alt={`Photo of ${name}`} className="contact-photo" />
    <p>{name}</p>
    <p>{phone}</p>
    <p>{email}</p>
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          <img src={link.icon} alt={link.name} className="social-icon" />
        </a>
      ))}
    </div>
  </section>
);

export default Contact;