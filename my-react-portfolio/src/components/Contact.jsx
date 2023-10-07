import React, { useState } from 'react';

function Contact() {
  const linkedinLink = 'https://se.linkedin.com/in/alexandra-meija-0757403b';

  return (
    <div>
      <h2>Contact</h2>
      <p>You can reach me here:</p>
      <ul>
        <li>
          <strong>Reach me at </strong>{' '}
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            Linkedin for Alexandra Meija
          </a>
        </li>
        {/* Add other social media links here */}
      </ul>
    </div>
  );
}

export default Contact;
