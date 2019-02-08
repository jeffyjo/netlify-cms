import React, { Component } from 'react'
import { navigate } from 'gatsby'

import { 
  fromObjectToParams,
  fromParamsToObject 
} from '../../util/Util'

import SearchField from '../../01-atoms/SearchField/SearchField'
import './Search.scss'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchValue: this.getSearchParams() ? this.getSearchParams() : ''
    }

    this.setSearchParams = this.setSearchParams.bind(this)
    this.getSearchParams = this.getSearchParams.bind(this)
    this.onSubmitSearch = this.onSubmitSearch.bind(this)
  }

  getSearchParams() {
    let queryObject = fromParamsToObject()
    return queryObject.search
  }

  setSearchParams(e, path = '') {
    let value = e.target.value

    if(value.length <= 0) {
      navigate('/')
      return
    }
    
    let data = {
      key: 'search',
      value: value
    }
    
    let query = fromObjectToParams(data)
    navigate(`${path}${query}`)
  }

  onSubmitSearch(e) {
    e.preventDefault()
    navigate('/search-results')
  }

  render() {
      return (
        <div className="m-search">
          <form onSubmit={(e) => this.onSubmitSearch(e)}>
            <SearchField componentClass="m-search__input" value={this.state.searchValue} action={(e) => this.setSearchParams(e)} />
          </form>
      </div>
    )
  }
}

export default Search