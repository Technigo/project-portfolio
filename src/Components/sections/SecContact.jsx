import React from 'react'

import { HeadingH1 } from '../typography/headingH1/HeadingH1'
import { RoundImg } from '../images/RoundImg'
import { HeadingH3 } from '../typography/headingH3/HeadingH3'

export const SecContact = () => {
  return (
    <div className="contact-wrapper">
      <HeadingH1 text={"Let's talk"}/>
      <RoundImg/>

      <div>
        <HeadingH3 className="contact-name" text={"Emmy Dieden"}/>
        <HeadingH3 className="contact-phone" text={"+46(0)737 44 00 84"}/>
        <HeadingH3 className="contact-email" text={"emmy.dieden@gmail.com"}/>
        
      </div>
      
    
    </div>
  )
}
