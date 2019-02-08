import React from 'react'
import propTypes from 'prop-types'

const TextField = ({type, componentClass}) => {

  return (
    <input 
      className={"a-text-field " + componentClass ? componentClass : ''}
      type={type} 
    />
  )
}

TextField.propTypes = {
  type: propTypes.string.isRequired,
  componentClass: propTypes.string
}

export default TextField