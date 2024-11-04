import React from 'react';
import Header from './components/Introduction/Header';
import Img from './components/Introduction/Img';
import Bio from './components/Introduction/Bio';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Img />
      <Bio />
    </div>
  );
};

export default App;
