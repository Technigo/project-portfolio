import React from 'react'

import './imgLink.css'

export const ImgLink = ({text, src, link, className}) => {
  return (
    <div>
        <a href={link} className={className}>
        <img src={src} alt={text} />
        </a>
    </div>
  )
}
