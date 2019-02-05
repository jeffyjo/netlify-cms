import React from 'react'
import { Link } from 'gatsby'

const ArticleItem = ({article}) => {
  let { slug: url } = article.node.fields
  let { title } = article.node.frontmatter
  
  return (
    <li>
      <Link to={url}>{title}</Link>
    </li>
  )
}

export default ArticleItem