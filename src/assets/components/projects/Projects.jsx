import React, { useState, useEffect } from 'react';
import './project.css';
import ProjectCardList from './ProjectCardList';

export const Projects = () => {
  
  return (
    <section className='projects-container'>
      <section className='projects'>
        <h1 className='h1projects'>Featured Projects</h1>
        <ProjectCardList />
      </section>
    </section>
   
  )
}
export default Projects;