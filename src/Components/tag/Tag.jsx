import React from 'react'

import './tag.css'

export const Tag = ({topics}) => {
  const tags = topics

  return (
    <>
    {tags.map((tag, index)=>{
      return(
        <div key={index}className="tag">
          {tag.toLowerCase() === "css3" || tag.toLowerCase() === "html5"
          ? tag.toUpperCase() // Converting css3 and html5 to uppercase
          : tag.charAt(0).toUpperCase() + tag.slice(1)} {/* Capitalising the initial letter for other tags*/}
        </div>
      )
    })}
    
    </>
  )
}
