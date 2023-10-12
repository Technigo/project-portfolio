import React from 'react'
import { RoundImg } from '../images/RoundImg'
import { HeadingH2 } from '../typography/headingH2/HeadingH2'
import { HeadingH4 } from '../typography/headingH4/HeadingH4'
import { NormalText } from '../typography/normalText/NormalText'

import './sections.css'


export const SecPresentation = () => {
  return (
    <>
    <div className="section presentation-wrapper">
      <RoundImg/>
      <div className="presentation-text">
        <HeadingH4 text={"Hi, I am Emmy Dieden"}/>
        <HeadingH2 text={"Frontend Developer"}/>
        <NormalText text={"Emmy is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field."}/>
      </div>
      <img src={'assets/arrow.svg'} height={30}/>
      </div>
    </>
  )
}
