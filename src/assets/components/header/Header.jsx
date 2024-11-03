import React from 'react';
import './Header.css';
import jagImage from '../images/jag1.jpg';
import Arrow from "../icons/arrow.svg"



export const Header = () => {
  return (
    <section className='intro'>
      <div className='introbox'>
        {/*Mobile View */}
        <img src={jagImage} alt='' className='profile-image'/>
        <div className='profile-container'>
          <div className='headings'>
            <h3 className='h3intro'>Hi, I'm Malin Lunde</h3>
            <h1 className='h1intro'>Frontend Developer</h1>
          </div>
          <p className='pintro'>I'm diving headfirst into the world of tech. While I'm relatively new to this exciting tech scene, my curiosity drives me to explore backend development, and my front-end skills come from hands-on learning. In collaborative environments, I bring a mix of technical curiosity and organizational finesse. Quick to adapt and service-minded, I'm navigating the tech world with a happy coding vibe. Let's make some tech magic together!</p>
        </div>
      </div>

        {/* Desktop View */}

      <div className='introbox-desktop'>
        <div className='headings'>
          <h3 className='h3intro'>Hi, I'm Malin Lunde</h3>
          <h1 className='h1intro'>Frontend Developer</h1>
        </div>
          <img src={jagImage} alt='' className='profile-image'/>
          <p className='pintro'>I'm diving headfirst into the world of tech. While I'm relatively new to this exciting tech scene, my curiosity drives me to explore backend development, and my front-end skills come from hands-on learning. In collaborative environments, I bring a mix of technical curiosity and organizational finesse. Quick to adapt and service-minded, I'm navigating the tech world with a happy coding vibe. Let's make some tech magic together!</p>        
      </div>
      <div className='arrow'>
        <a href="#Tech">
          <img src={Arrow} alt='Arrow' className='arrow-image' />
        </a>
      </div>
    </section>
  );
};
