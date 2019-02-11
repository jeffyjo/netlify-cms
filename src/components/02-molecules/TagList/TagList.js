import React from 'react'

import './TagList.scss'
import './TagItem.scss'
import './TagLink.scss'

const TagList = (props) => {
  return(
    <ul className="m-taglist">{props.children}</ul>
  )
}

export default TagList