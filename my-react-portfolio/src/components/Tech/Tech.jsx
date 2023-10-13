import React from 'react';
import { Headline } from '../Headline/Headline';
import './Tech.css';

export const Tech = () => {
    return (
      <div className="tech-container">
        <Headline className="headline" text="Tech" level={1} />
          <h3>HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, API:s, 
mob-programming, pair-programming, Github. </h3>
      </div>
    );
  }