import React from 'react'

import ArticleItem from '../components/molecules/ArticleItem/ArticleItem'

const ArticleContainer = ({articles}) => {
  console.log('articles', articles)
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