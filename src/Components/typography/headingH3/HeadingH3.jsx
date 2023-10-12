import React from 'react'

import './headingH3.css'

export const HeadingH3 = ({text}) => {

  // Replace hyphens with spaces
  const formattedText = text.replace(/-/g, ' ');

  return (
    <h3>{formattedText}</h3>
  )
}
