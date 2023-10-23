import React from 'react';

function Button({ icon, label, link, className }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`btn ${className}`}>
      <img src={icon} alt={`${label} Button`} />
      {label}
    </a>
  );
}

export default Button;
