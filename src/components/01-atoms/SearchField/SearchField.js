import React from 'react'
import propTypes from 'prop-types'

import './SearchField.scss'

const SearchField = ({componentClass, action, value}) => {

  return (
    <input 
      type="search" 
      onChange={action}
      className={"a-search " + componentClass ? componentClass : ''}
      value={value || ''}
      placeholder="Search..."
    />
  )
}

SearchField.propTypes = {
  componentClass: propTypes.string,
  action: propTypes.func,
  value: propTypes.string
}

export default SearchField