import React from 'react'
import PropTypes from 'prop-types'
import Link from '../../01-atoms/Link/Link'

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

ListItem.proptypes = {
  item: PropTypes.shape({
    node: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string
      })
    })
  })
}

export default ListItem