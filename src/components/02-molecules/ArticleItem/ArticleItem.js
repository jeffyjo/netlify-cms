import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../01-atoms/Link/Link'
import './ArticleItem.scss'

const ArticleItem = ({ article }) => {
  let { slug: url } = article.node.fields
  let { title, image } = article.node.frontmatter

  return (
    <li className="m-article-item" style={ {backgroundImage: `${image ? `url(${image.publicURL})`: ''}`} }>
      <Link className="m-article-item__link" to={url}>{title}</Link>
    </li>
  )
}

ArticleItem.propTypes = {
  article: PropTypes.shape({
    node: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default ArticleItem