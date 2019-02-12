import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const Button = ({ children, className, type }) => {
  return (
    <button 
      className={"m-button " + (className ? className : '') }
      type={type ? type : ''}
      >{children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.string
}

export default Button