import bild from './bild.jpg'
import vatten from './vatten.jpg'
import happy from './happy.png'
import pet from './pet.png'
import music from './music.png'
import pizza from './pizza.png'

import React, { useEffect } from 'react';

export const Project = () => {
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
      <div style={{ backgroundImage: `url(${vatten})`, padding: `100px`, color: 'yellow' }}>
      <h1>what i did while i learn</h1>
        <a href="https://github.com/catfooo/project-happy-thoughts-vite" style={{ color: 'yellow' }}><h2>project happy</h2></a>
        <a href="https://cozy-khapse-25f81c.netlify.app"><img src={happy} alt="screenshot from project happy" width="50%" height="50%" /></a>
        <p>i tried to gather happy thoughts from people. user can write things here while they are having happy moment. by doing that, user can think again about their happy moments, and get to know how others feel happy in their life. by liking each other, they can send minor signal which means they are thinking same each other, and the list of liked idea is even saving at the very last part of list, so user can easily collect happy moments of others!</p>
        <a href="https://github.com/catfooo/project-survey-vite" style={{ color: 'yellow'}}><h2>project pet survey</h2></a>
        <a href="https://astounding-bienenstitch-033bb0.netlify.app"><img src={pet} alt="screenshot from project pet survey" width="50%" height="50%" /></a>
        <p>this project is from our pair programming! we worked for making idea specific for our pet we dreamed about. user is asked to put in some of user's personal infomation, but in return user will have non-forgetable journey with user's virtual pet which had dreamt for long time. during the survey, user will name the pet, color the pet, and decide the type of pet that user had dreamt about. there is also progress bar which telling user how questions had gone so far!</p>
        <a href="https://github.com/catfooo/project-music-releases-vite" style={{color: 'yellow'}}><h2>project music releases</h2></a>
        <a href="https://stunning-zuccutto-987374.netlify.app"><img src={music} alt="screenshot from project music releases" width="50%" height="50%" /></a>
        <p>this is my first react project! we learned fetching method and asked to use that for this project. we fetched new releasing album list from spotify, and tried to make artist and album data to be showed appropriate way. we even created like and button for each album! also, user can get information about artist or album by just clicking name of them. if so, they will get actual link from spotify so they can easily start to add this new information to their everyday spotify list!</p>
        <a href="https://github.com/Technigo/project-pizza/pull/30/commits/32096a773f72ebf0ede783b080f84137b5639eef" style={{color: 'yellow'}}><h2>javascript pizzalia</h2></a>
        <a href="https://marvelous-bombolone-94bc37.netlify.app"><img src={pizza} alt="screenshot from javascript pizzalia" width="50%" height="50%" /></a>
        <p>it was my first javascript project and also my first technigo project! haha, i cant even remember how i felt at that time. anyway, by this simple app, user can decide which type of food, and which type of specific dish they will order. user will also be asked for name and age, so sweet greeting and waiting messeage will follow! user will even get specific amount of food based on your age. i sometimes order child's menu for myself and feel little bit guilty, but for this restaurnant, user are not allowed to do that! :D</p>
      </div>
    </div>
  );
};
