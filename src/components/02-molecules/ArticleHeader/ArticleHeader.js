import React from 'react'

import DateStamp from '../../01-atoms/DateStamp/DateStamp'

import './ArtcielHeader.scss'

const ArticleHeader = ({title, date, imageUrl, timeToRead}) => {
  return (
    <div className="m-article-header">
      <h1>{title}</h1>
      <img className="m-article-header__image" src={imageUrl} alt={imageUrl} />
      <div className="m-article-header__info">Time to Read: {timeToRead} min.</div>
      <DateStamp date={date} />
    </div>
  )
}

export default ArticleHeader