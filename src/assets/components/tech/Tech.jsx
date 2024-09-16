import React, { useState } from 'react';
import './tech.css';

export const Tech = () => {
  const techText = "HTML, CSS, Flexbox, Grids, JavaScript, ES7, JSX, Zustand, React, React Hooks, Node.js, Web Accessibility, APIs, Express, mob-programming, pair-programming, GitHub, MongoDB, Postman, Render, Strato, FileZilla."
  
  return (
    <section className='tech'>
      <div className='techwrapper'>
        <h1 className='h1tech'>Tech</h1>
        <p className='ptech'>{techText}</p>
      </div>
    </section>
    
  );
};
