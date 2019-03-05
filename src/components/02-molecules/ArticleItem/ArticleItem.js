import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../01-atoms/Link/Link'

const ArticleItem = ({ article }) => {
  let { slug: url } = article.node.fields
  let { title } = article.node.frontmatter

  return (
    <li>
      <Link to={url}>{title}</Link>
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
