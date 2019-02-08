import React from 'react'
import propTypes from 'prop-types'

const TextField = ({type, componentClass, action, value}) => {

  return (
    <input 
      className={"a-text-field " + componentClass ? componentClass : ''}
      type={type} 
      onChange={action}
      value={value}
    />
  )
}

TextField.propTypes = {
  type: propTypes.string.isRequired,
  componentClass: propTypes.string,
  action: propTypes.func,
  value: propTypes.string
}

export default TextField