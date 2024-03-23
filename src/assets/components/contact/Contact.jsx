import React from 'react'
import linkedin from '../icons/linkedin.svg';
import github from '../icons/github.svg';
import jagImage from '../images/jag1.jpg';
import './contact.css';

  

export const Contact = () => {
  const githubLink = 'https://github.com/malinlunde';
  const linkedinLink = 'https://www.linkedin.com/in/malin-lunde-9a4558297/';

  return (
    <section className='contact'>
      <h2 className="h2contact">Let's talk</h2>
      <img src={jagImage} alt='' className='profile-image'/>
      <p className='contact-name'>Malin Lunde</p>
      <p className='contact-number'>+46(0)734 33 97 18</p>
      <p className='contact-mail'>malin.lunde@thetechadminsphere.com</p>
      <div className='icons-wrapper'>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt='LinkedIn' className='linkedin-button' />
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreffer">
          <img src={github} alt='Github' className='github-button' />
        </a>
      </div>
      <div className='scroll-text-wrapper'>
        <div className='scroll-text'>
        Malin Lunde · Frontend Developer · Malin Lunde · Frontend Developer · Malin Lunde · Frontend Developer · Malin Lunde · Frontend Developer · Malin Lunde · Frontend Developer · Malin Lunde · Frontend Developer · Malin Lunde · Frontend Developer · Malin Lunde · Frontend Developer · Malin Lunde · Frontend Developer · Malin Lunde · Frontend Developer · Malin Lunde · Frontend Developer · Malin Lunde · Frontend Developer · Malin Lunde · Frontend Developer · Malin Lunde · Frontend Developer · Malin Lunde · Frontend Developer · Malin Lunde · Frontend Developer · Malin Lunde · Frontend Developer ·
        </div>
        </div>
     
    </section>
  )
};

export default Contact;