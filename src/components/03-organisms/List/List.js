import React from 'react'
import propTypes from 'prop-types'

import ListItem from '../../02-molecules/ListItem/ListItem'
import './List.scss'

let List = ({ items }) => {
  return (
    <ul className="o-list">
      {items ? items.map((item, i) => <ListItem item={item} key={i} />) : null}
    </ul>
  )
}

List.propTypes = {
  items: propTypes.array,
}

export default List
