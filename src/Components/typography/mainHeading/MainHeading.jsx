import React from 'react'

import './mainHeading.css'

export const MainHeading = ({className, text}) => {
  return (
    <div className={`main-heading ${className}`}>{text}</div>
  )
}
