import React, { Component } from 'react'

import TextField from '../../01-atoms/TextField/TextField'
import './Search.scss'

class Search extends Component {
  render() {
      return (
        <div className="m-search">
        <TextField type="search" componentClass="m-search__input" />
      </div>
    )
  }
}

export default Search