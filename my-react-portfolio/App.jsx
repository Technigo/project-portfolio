import React from 'react';
import { Introduction } from './components/introduction.jsx';
import { Tech } from './components/tech.jsx';
import { Featuredproj } from './components/featuredproj.jsx';

export const App = () => {
  return (
    <div>
      <Introduction /> 
      <Tech /> 
      <Featuredproj /> 
    </div>
  );
};
