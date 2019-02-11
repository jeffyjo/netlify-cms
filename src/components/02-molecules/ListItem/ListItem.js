import React from 'react'
import { Link } from 'gatsby'

import './ListItem.scss'

let ListItem = ({item}) => {
  const { frontmatter : { title, date }, fields: { slug: url } } = item.node

  return (
    <li>
      <Link to={url} className="m-list-item">
        <h3 className="m-list-item__title">{title}</h3>
        <time className="m-list-item__date">{date}</time>
      </Link>
    </li>
  )
}

export default ListItem