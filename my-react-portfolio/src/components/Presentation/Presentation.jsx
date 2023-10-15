import React from 'react';
import { Headline } from '../Headline/Headline';
import { Image } from '../Image/Image';
import avatar from '../../assets/avatar.png';
import { Arrow } from '../Arrow/Arrow';
import './Presentation.css';

export const Presentation = () => (
  <>
    <div className="presentation-container">
      <div className="avatar-container">
        <Image src={avatar} alt="Manne Johansson Avatar" className="avatar"/>
      </div>
      
      <div className="headline-container">
        <Headline text="Hi, I'm Manne Johansson" level={3} />
      </div>
      
      <div className="subheadline-container">
        <Headline text="Web Developer" level={1} />
      </div>
      
      <div className="description-container">
        <p className="description">
          Manne is an exceptional developer known for his innovative solutions and exceptional coding abilities. He creates user-friendly applications and solves complex issues with ease. His drive for excellence makes him a valuable asset to any project and a standout in the technology field.
        </p>
      </div>
    </div>
  </>
);
