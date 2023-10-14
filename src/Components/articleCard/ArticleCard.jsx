import React from 'react'

import { HeadingH1 } from '../typography/headingH1/HeadingH1'
import {ArticleImg} from '../images/articleImg/ArticleImg'
import { Date } from '../date/Date'
import { HeadingH3 } from '../typography/headingH3/HeadingH3'
import { NormalText } from '../typography/normalText/NormalText'
import { Button } from '../button/Button'


import './articleCard.css'

export const ArticleCard = ({articles}) => {
  console.log(articles)
  return (
    <>
    <section className="article-wrapper">
      <HeadingH1 className="article-h1" text="My words"/>

      <div className="article-inner-wrapper">

      {articles.map((article, index)=> {
        
        return (
          <div className={"article-card"} key={index}>
            <ArticleImg/>
            <Date date={article.date}/>
            <HeadingH3 className="article-h3" text={article.title} />
            <NormalText className="article-card-text" text={article.content}/>
            <Button text={"Read article"} hoverColor={"yellow"}/> 
          </div>
        )
      }
     )}
      </div>
    </section>
    
    </>
  )
}
