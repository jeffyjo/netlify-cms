import React from 'react'
import propTypes from 'prop-types'

import GridItem from '../../02-molecules/GridItem/GridItem'
import './Grid.scss'

let Grid = ({items}) => {
  return (
    <div className="o-grid">
      {items ? items.map((item, i) => <GridItem item={item} key={i} />) : null}
    </div>
  )
}

Grid.propTypes = {
  items: propTypes.array
}

export default Grid