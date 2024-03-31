import React, { useEffect } from 'react';
import bild from './bild.jpg'
import vatten from './vatten.jpg'

export const Project = ({ projectTitle, projectItems }) => {
  useEffect(() => {
    const handleScroll = () => {
      const animatedSection = document.querySelector('.animate-on-scroll');

      if (animatedSection) {
        const rect = animatedSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight / 1.5) {
          // Apply the slide-up animation to the section when it is in the viewport
          animatedSection.style.opacity = '1';
          animatedSection.style.transform = 'translateY(-50px)'; // Slide-up effect
          animatedSection.style.transition = 'transform 1s ease'; // Apply transition for smoother animation
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger the animation when the component mounts (if already in view)
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="animate-on-scroll"
      style={{
        backgroundImage: `url(${bild})`,
        padding: '100px',
        color: 'yellow',
        opacity: '0',
        transform: 'translateY(30px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      <div style={{ 
        backgroundImage: `url(${vatten})`,
        padding: `100px`,
        color: 'yellow',
      }}>
        <h1>{projectTitle}</h1>
        {projectItems.map((item, index) => (
          <div key={index}>
            <a href={item.link} style={{ color: 'yellow' }}><h2>{item.name}</h2></a>
            <a href={item.projectLink}><img src={item.image} alt={`screenshot from ${item.name}`} width="50%" height="50%" /></a>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
