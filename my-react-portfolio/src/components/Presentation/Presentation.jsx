import React from 'react';
import { Headline } from '../Headline/Headline';
import { Image } from '../Image/Image';
import avatar from '../../assets/avatar.png';
import './Presentation.css';

export const Presentation = () => {
  return (
    <div className="presentation-container">
        <Image src={avatar} alt="Avatar" className="avatar"/>
        <Headline className="headline" text="Hi, i'm Manne Johansson" level={3} />
        <Headline className="headline" text="Web Developer" level={1} />
        <p>Manne is an exceptional developer known for his innovative solutions and exceptional coding abilities. He creates user-friendly applications and solves complex issues with ease. His drive for excellence makes him a valuable asset to any project and a standout in the technology field.</p>
        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 68">
            <path 
            d="M24 23.5L14.5 33M14.5 33L5 23.5M14.5 33L14.5 3" 
            stroke="#FF4575" 
            strokeWidth="6" 
            strokeLinecap="square" 
            strokeLinejoin="round"
            />
        </svg>
    </div>
  );
}

