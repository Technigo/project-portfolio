import React from 'react';

function Contact() {
  const linkedinLink = 'https://se.linkedin.com/in/alexandra-meija-0757403b';

  return (
    <div className="contact">
      <h2 className="classh2contact">Let's talk</h2>
      <img src="src/original.jpg" alt="Your Name" className="profile-image" />
      <p className="contact-text">You can reach me here:</p>
      <ul className="contact-list">
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Linkedin for Alexandra Meija
        </a>
        {/* Add other social media links here */}
      </ul>
    </div>
  );
}

export default Contact;

