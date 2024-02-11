import React from 'react';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import profileImage from '../assets/original.jpg';
import './Contact.css';
import Button from './Button';

const Contact = React.forwardRef((props, ref) => { // Use forwardRef
  const linkedinLink = 'https://se.linkedin.com/in/alexandra-meija-0757403b';
  const githubLink = 'https://github.com/Cocofnas';

  return (
    <div className="contact" ref={ref}> {/* Attach the ref */}
      <h2 className="classh2contact">Let's talk</h2>
      <img src={profileImage} alt="Your Name" className="profile-image" />
      <p className="contact-text">You can reach me here:</p>
      <ul className="contact-list">
      <div className="button-container">
        <Button
          type="contact-link" 
          icon={<img src={linkedinIcon} alt="LinkedIn" />} 
          onClick={() => window.open(linkedinLink, '_blank')} 
        />
        </div>
<div className="button-container">
  <Button
    type="contact-link"
    icon={<img src={githubIcon} alt="GitHub" />}
    onClick={() => window.open(githubLink, '_blank')}
  />
</div>
      </ul>
    </div>
  );
});

export default Contact;



