import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const Button = ({ children, className, type, disabled }) => {
  return (
    <button 
      className={"m-button " + (className ? className : '') }
      type={type ? type : ''}
      disabled={disabled}
      >{children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool
}

export default Button