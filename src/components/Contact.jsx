import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Let’s Talk</h2>
      <div className="contact-details">
        <img src="/contact.jpg" alt="Kelly hunt" className="contact-image" />
        <p>Jacqueline Kelly Hunt</p>
        <p>+372 56488815</p>
        <p>jacquelinekelly.hunt@gmail.com</p>
        <div className="social-links">
          <a href="www.linkedin.com/in/jacqueline-kelly-hunt-abb091226" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/jacquelinekellyhunt" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;