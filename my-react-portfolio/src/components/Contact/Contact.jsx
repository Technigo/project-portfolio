import React from 'react';
import { Headline } from '../Headline/Headline';
import { Image } from '../Image/Image';
import avatar from '../../assets/avatar.png';
import './Contact.css';

export const Contact = () => {
  return (
    <div className="contact-container">
      <Headline className="headline" text="Let's talk" level={1} />
      <Image src={avatar} alt="Avatar" className="avatar"/>
      <p className="contact-info">Manne Johansson</p>
      <p className="contact-info">+46(0)701 23 45 67</p>
      <p className="contact-info">example@example.com</p>
    </div>
  );
}
