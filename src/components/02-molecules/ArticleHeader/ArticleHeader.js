import React from 'react'

import DateStamp from '../../01-atoms/DateStamp/DateStamp'

import { headerConfiguration } from './const'
import './ArtcielHeader.scss'

const ArticleHeader = ({title, date, imageUrl, timeToRead, headerPosition}) => {

  return (
    <div className={"m-article-header " + 
      (headerConfiguration[headerPosition] ? headerConfiguration[headerPosition] : '')
    }>
      <h1>{title}</h1>
      <div>
        <img className="m-article-header__image" src={imageUrl} alt={imageUrl} />
      </div>
      <div className="m-article-header__info">Time to Read: {timeToRead} min.</div>
      <DateStamp date={date} />
    </div>
  )
}

export default ArticleHeader