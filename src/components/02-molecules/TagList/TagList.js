import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../01-atoms/Link/Link'

import './TagList.scss'

const TagList = ({ tags }) => {

  return (
    <ul className="m-taglist">
      {tags 
      ? tags.map(tag => {
        let fullUrl = `/tags/${tag}`
        
        return (
          <li key={tag} className="m-taglist__tag"><Link className="a-link--button" to={fullUrl}>{tag}</Link></li>
        )
      })
      : ''}
    </ul>
  )
}

TagList.proptypes = {
  tags: PropTypes.array
}

export default TagList