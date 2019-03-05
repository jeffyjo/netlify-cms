import React from 'react'
import PropTypes from 'prop-types'

import './Image.scss'

const Image = ({ imageUrl, className }) => {
  return (
    <img
      className={`a-image ${className ? className : ''}`}
      src={imageUrl}
      alt={imageUrl}
    />
  )
}

Image.proptypes = {
  imageUrl: PropTypes.string.isRequired,
}

export default Image
