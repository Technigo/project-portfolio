import React from 'react';
import { Headline } from '../Headline/Headline';
import './Contact.css';

export const Contact = () => {
    return (
      <div className="contact-container">
        <Headline className="headline" text="Let's talk" level={1} />
          
          <img src="testimage.jpg" alt="Description" className="contact-image"/>
          
          <h3>Lorem ipsum</h3>
          <h3>Lorem ipsum</h3>
          <h3>Lorem ipsum</h3>
      </div>
    );
  }