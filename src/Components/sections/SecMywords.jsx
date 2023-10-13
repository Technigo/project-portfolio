import React, { useState, useEffect } from 'react'

import {ArticleCard} from '../articleCard/ArticleCard'

import blogData from '../../blogData.json'

import './sections.css'
export const SecMywords = () => {
    const [articles, setArticles] = useState([])
    useEffect (() => {setArticles(blogData)}, [])
    console.log(articles)
  return (
    <>
    <ArticleCard articles={articles}/>
    </>
  )
}
