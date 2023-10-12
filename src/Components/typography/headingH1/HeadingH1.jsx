import React from 'react'

import './headingH1.css'

export const HeadingH1 = ({className, text}) => {
  return (
    <h1 className={`${className}`}>{text}</h1>
  )
}
