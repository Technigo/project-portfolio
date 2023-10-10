import React, { useState } from 'react';

function Contact() {
  const linkedinLink = 'https://se.linkedin.com/in/alexandra-meija-0757403b';

  return (
    <div className="contact">
      <h2 className="heading-classh2">Contact</h2>
      <p className="contact-text">You can reach me here:</p>
      <ul className="contact-list">
        <li className="contact-item">
          <strong className="contact-strong">Reach me at </strong>{' '}
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Linkedin for Alexandra Meija
          </a>
        </li>
        {/* Add other social media links here */}
      </ul>
    </div>
  );
}

export default Contact;
