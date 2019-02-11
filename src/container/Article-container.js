import React from 'react'

import ArticleItem from '../components/02-molecules/ArticleItem/ArticleItem'

const ArticleContainer = ({articles}) => {
  return (
    <div>
      <ul>
        {articles 
        ? articles.map( (article, i) => (
          <ArticleItem article={article} key={i} />
        ))
        : ''}
      </ul>
    </div>
  )
}

export default ArticleContainer