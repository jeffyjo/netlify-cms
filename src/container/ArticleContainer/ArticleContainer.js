import React from 'react'

import ArticleItem from '../../components/02-molecules/ArticleItem/ArticleItem'

import './ArticleContainer.scss'

const ArticleContainer = ({ articles }) => {
  return (
    <div className="c-article-container">
      <ul className="c-article-container__list">
        {articles
          ? articles.map((article, i) => (
              <ArticleItem article={article} key={i} />
            ))
          : ''}
      </ul>
    </div>
  )
}

export default ArticleContainer
