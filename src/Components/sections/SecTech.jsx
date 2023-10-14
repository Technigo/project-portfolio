import React from 'react'

import { HeadingH1 } from '../typography/headingH1/HeadingH1'
import { NormalTextBig } from '../typography/normalTextBig/NormalTextBig'

export const SecTech = () => {
  return (
    <>
    <div className="tech-wrapper">
      <HeadingH1 text="Tech" className="tech-h1"/>
      <NormalTextBig className={"tech-normal-big-text"} text="HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, API:s, 
      mob-programming, pair-programming, Github."/>
    </div>
    </>
  )
}
