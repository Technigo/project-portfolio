import React from 'react';
import { Headline } from '../Headline/Headline';
import { Image } from '../Image/Image';
import avatar from '../../assets/avatar.png';
import linkedin from './assets/Btn - linkedin.svg';
import github from './assets/Btn - github.svg';
import stackoverflow from './assets/Btn - stackoverflow.svg';
import twitter from './assets/Btn - twitter.svg';
import instagram from './assets/Btn - instagram.svg';
import './Contact.css';

export const Contact = () => {
  return (
    <div className="contact-container">
      <Headline className="headline" text="Let's talk" level={1} />
      <Image src={avatar} alt="Avatar" className="avatar"/>
      <p className="contact-info">Manne Johansson</p>
      <p className="contact-info">+46(0)701 23 45 67</p>
      <p className="contact-info">example@example.com</p>

      <div className="social-icons-row">
        <Image src={linkedin} alt="LinkedIn" className="social-icon"/>
        <Image src={github} alt="GitHub" className="social-icon"/>
        <Image src={stackoverflow} alt="Stack Overflow" className="social-icon"/>
        <Image src={twitter} alt="Twitter" className="social-icon"/>
        <Image src={instagram} alt="Instagram" className="social-icon"/>
      </div>
    </div>
  );
};
