import React from 'react';
import { Headline } from '../Headline/Headline';
import { Image } from '../Image/Image';
import avatar from './assets/avatar.png';
import './Contact.css';

export const Contact = () => {
    return (
      <div className="contact-container">
        <Headline className="headline" text="Let's talk" level={1} />
          
        <Image src={avatar} alt="Avatar" className="avatar"/>
          
          <h3>Manne Johansson</h3>
          <h3>+46(0)701 23 45 67</h3>
          <h3>example@example.com</h3>
      </div>
    );
  }