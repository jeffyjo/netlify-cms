import React from 'react'
import PropTypes from 'prop-types'

import './Image.scss'

const Image = ({ imageUrl }) => {
  return (
    <img className="a-image" src={imageUrl} alt={imageUrl} />
  )
}

Image.proptypes = {
  imageUrl: PropTypes.string.isRequired
}

export default Image