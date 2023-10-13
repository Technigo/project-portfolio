import React from 'react'
import { NormalText } from '../typography/normalText/NormalText'

import './skillList.css'

export const SkillList = ({list}) => {
  return (
    <>
    {list.map((listItem)=> {
        return (
            <>
            <NormalText  className="skill-list"text={listItem}/>
            </>
        )

    })}
    
    </>
  )
}
