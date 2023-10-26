import React from 'react';
import linkedinIcon from '../assets/linkedin.svg'; // Import your LinkedIn icon SVG
import githubIcon from '../assets/github.svg'; // Import your GitHub icon SVG
import profileImage from '../assets/original.jpg';
import './Contact.css';

function Contact() {
  const linkedinLink = 'https://se.linkedin.com/in/alexandra-meija-0757403b';
  const githubLink = 'https://github.com/Cocofnas'; 

  return (
    <div className="contact">
      <h2 className="classh2contact">Let's talk</h2>
      <img src={profileImage} alt="Your Name" className="profile-image" />
      <p className="contact-text">You can reach me here:</p>
      <ul className="contact-list">
        <li className="contact-link">
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </li>
        <li className="contact-link">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;



