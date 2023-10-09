import React, { useEffect } from 'react'
import { Intro } from './components/Intro'
import { Tech } from './components/Tech'
import { Project } from './components/Project'
import  Contact  from './components/Contact'

// import kontakt from './kontakt.jpg'

export const App = () => {

  useEffect(() => {
    const handleScroll = () => {
      const animatedSection = document.querySelector('.animate-on-scroll');
      const rect = animatedSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight / 1.5) {
        // Apply the slide-up animation to the section when it is in the viewport
        animatedSection.style.opacity = '1'; 
        animatedSection.style.transform = 'translateY(-50px)'; // Slide-up effect
        animatedSection.style.transition = 'transform 1s ease'; // Apply transition for smoother animation
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger the animation when the component mounts (if already in view)
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
    return <form>
      <Intro />
      <Tech />
      <Project />
      <Contact />
      
      
      {/* <div style={{backgroundImage: `url(${kontakt})`, padding: `100px`, color: 'yellow'}}>
        <h1>contact</h1>
        <p>fakemail@fakemail.jpg</p>
        |<a href="https://www.linkedin.com/in/so-youn-choi-703270212/">linkedin</a>|
        <a href="https://github.com/catfooo">github</a>|
        <a href="https://stackoverflowteams.com/c/technigo/users/490/?tab=profile">stackoverflow</a>|
      </div> */}
      
      </form>
};
