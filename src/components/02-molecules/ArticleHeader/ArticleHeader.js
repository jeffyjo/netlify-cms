import React from 'react'
import PropTypes from 'prop-types'

import DateStamp from '../../01-atoms/DateStamp/DateStamp'
import Image from '../../01-atoms/Image/Image'
import TTRLabel from '../../01-atoms/TTRLabel/TTRLabel'

import { headerConfiguration } from './const'
import './ArticleHeader.scss'

const ArticleHeader = ({
  title,
  date,
  imageUrl,
  timeToRead,
  headerPosition,
}) => {
  return (
    <div
      className={
        'm-article-header ' +
        (headerConfiguration[headerPosition]
          ? headerConfiguration[headerPosition]
          : '')
      }
    >
      <h1 className="m-article-header__heading">{title}</h1>
      <div className="m-article-header__image">
        <Image imageUrl={imageUrl} />
      </div>
      <div className="m-article-header__info">
        <TTRLabel TTRText={timeToRead} />
        <DateStamp date={date} />
      </div>
    </div>
  )
}

ArticleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  imageUrl: PropTypes.string,
  timeToRead: PropTypes.number,
  headerPosition: PropTypes.string.isRequired,
}

export default ArticleHeader
