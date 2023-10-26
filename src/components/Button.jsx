import React from 'react';
import './Button.css';

function Button({ type, label, icon, onClick }) {
  return (
    <button className={`custom-button ${type}`} onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      {label && <span className="label">{label}</span>}
    </button>
  );
}

export default Button;