import React from 'react'
import { HeadingH1 } from '../typography/headingH1/HeadingH1'
import {ArticleImg} from '../images/articleImg/ArticleImg'

import './articleCard.css'

export const ArticleCard = ({articles}) => {
  console.log(articles)
  return (
    <>
    <secition className="article-wrapper">
      <HeadingH1 className="article-heading" text="My words"/>

      {articles.map((article, index)=> {
        return (
          <div className="article-card" key={index}>
            <ArticleImg/>
          </div>

        )
      })}





    </secition>
    
    </>
  )
}
