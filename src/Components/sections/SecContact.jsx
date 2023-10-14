import React from 'react'

import { HeadingH1 } from '../typography/headingH1/HeadingH1'
import { RoundImg } from '../images/RoundImg'
import { HeadingH3 } from '../typography/headingH3/HeadingH3'
import { ImgLink } from '../imgLink/ImgLink'

export const SecContact = () => {
  return (
    <div className="contact-wrapper">
      <HeadingH1 className="contact-h1"text={"Let's talk"}/>
      <RoundImg/>

      <div>
        <HeadingH3 className="contact-name" text={"Emmy Dieden"}/>
        <HeadingH3 className="contact-phone" text={"+46(0)737 44 00 84"}/>
        <HeadingH3 className="contact-email" text={"emmy.dieden@"}/>
      </div>
      
      <div className="social-media">
            <ImgLink text={"Link to LinkedIn"} src={'./assets/icons/linkedin_grey.svg'} link={'www.linkedin.com/in/emmy-dieden-774574283'} className={"link-linkedin"}/>
            <ImgLink text={"Link to GitHub"} src={'/assets/icons/github_grey.svg'} link={'https://github.com/emmydieden'}className={"link-github"}/>
            <ImgLink text={"Link to Instagram"} src={'/assets/icons/instagram_grey.svg'} className={"link-instagram"} link={'https://www.instagram.com/emmydieden_art/'}/>
      </div>
    
    </div>
  )
}
