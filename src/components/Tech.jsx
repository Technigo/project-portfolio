import React from 'react';
import './Tech.css';

const TechStack = ({ technologies }) => (
  <section className="tech-section">
    <h2>Tech</h2>
    <ul className="tech-list">
      {technologies.map((tech, index) => (
        <li key={index} className="tech-item">{tech}</li>
      ))}
    </ul>
  </section>
);

export default TechStack;