import React from 'react'
import { Link } from 'gatsby'

import './GridItem.scss'

let GridItem = ({item}) => {
  const { frontmatter : { title, date }, fields: { slug: url } } = item.node

  return (
    <Link to={url} className="m-grid-item">
      <h3 className="m-grid-item__title">{title}</h3>
      <time className="m-grid-item__date">{date}</time>
    </Link>
  )
}

export default GridItem