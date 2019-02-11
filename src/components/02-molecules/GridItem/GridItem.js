import React from 'react'

import './GridItem.scss'

let GridItem = ({item}) => {
  const { title, date } = item.node.frontmatter 
  return (
    <div className="m-grid-item">
      <h3 className="m-grid-item__title">{title}</h3>
      <time>{date}</time>
    </div>
  )
}

export default GridItem