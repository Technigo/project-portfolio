import React, { useEffect, useRef } from 'react';
import kontakt from './kontakt.jpg'

const Contact = () => {
  const animatedSectionRef = useRef(null);

  useEffect(() => {
    const animatedSection = animatedSectionRef.current;

    const handleScroll = () => {
      const rect = animatedSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight / 1.5) {
        animatedSection.style.opacity = '1';
        animatedSection.style.transform = 'translateY(-100px)';
        animatedSection.style.transition = 'transform 1s ease';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={animatedSectionRef} style={{backgroundImage: `url(${kontakt})`, padding: `100px`, color: 'yellow'}}>
      <h1>Contact</h1>
      <p>fakemail@fakemail.jpg</p>
      |<a href="https://www.linkedin.com/in/so-youn-choi-703270212/">linkedin</a>|
        <a href="https://github.com/catfooo">github</a>|
        <a href="https://stackoverflowteams.com/c/technigo/users/490/?tab=profile">stackoverflow</a>|
    </div>
  );
};

export default Contact;
