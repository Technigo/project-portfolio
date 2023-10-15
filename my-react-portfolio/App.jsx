import React from 'react';
import { Introduction } from './components/introduction.jsx';
import { Tech } from './components/tech.jsx';
import { Featuredproj } from './components/featuredproj.jsx';
import { Skills } from './components/skills.jsx';
import { Mywords } from './components/mywords.jsx';
import { Contact } from './components/contact.jsx';

export const App = () => {
  return (
    <div>
      <Introduction /> 
      <Tech /> 
      <Featuredproj /> 
      <Skills /> 
      <Mywords /> 
      <Contact />
    </div>
  );
};
