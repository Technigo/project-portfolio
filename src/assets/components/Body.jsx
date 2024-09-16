import React from 'react';
import './body.css';
import { Header } from './header/Header';
import { Tech } from './tech/Tech';
import { Projects } from './projects/Projects';
import { Skills } from './skills/Skills';
import { Contact } from './contact/Contact';

export const Body = () => {
  return (
    <div className="big-wrapper">
        <Header />
        <Tech />
        <Projects />
        <Skills />
        <Contact />
    </div>
  );
};
