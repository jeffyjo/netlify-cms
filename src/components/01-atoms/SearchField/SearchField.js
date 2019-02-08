import React from 'react'
import propTypes from 'prop-types'

const SearchField = ({componentClass, action, value}) => {

  return (
    <input 
      type="search" 
      className={"a-text-field " + componentClass ? componentClass : ''}
      onChange={action}
      value={value}
    />
  )
}

SearchField.propTypes = {
  componentClass: propTypes.string,
  action: propTypes.func,
  value: propTypes.string
}

export default SearchField