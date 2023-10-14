import React from 'react'

import './projectImg.css'

export const ProjectImg = ({src, alt}) => {
  return (
    <>
    <img className="project-img"  src={src} alt={alt}/>
    </>
  )
}

//Old photo
{/* <img className="project-img"  src="https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg" alt="Image of smartphone"/> */}