import React, { Component } from 'react'
import { navigate } from 'gatsby'

import { fromParamsToObject } from '../../util/Util'

import { searchKey } from '../../util/Const'
import SearchObservable from '../../util/SearchObservable'

import SearchField from '../../01-atoms/SearchField/SearchField'
import Button from '../Button/Button'
import './Search.scss'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchValue: '',
      isEmpty: false,
    }

    this.setSearchParams = this.setSearchParams.bind(this)
    this.getSearchParams = this.getSearchParams.bind(this)
    this.onSubmitSearch = this.onSubmitSearch.bind(this)
  }

  componentDidMount() {
    this.setState({
      searchValue: window ? this.getSearchParams() : '',
    })
  }

  getSearchParams() {
    let queryObject = fromParamsToObject()
    if (queryObject) {
      return queryObject.search
    }
    return null
  }

  setSearchParams(e, path = '') {
    let value = e.target.value
    let isEmpty = value.length > 0 ? false : true

    this.setState({
      searchValue: value,
      isEmpty: isEmpty,
    })

    SearchObservable.notify(value)
  }

  onSubmitSearch(e) {
    e.preventDefault()

    if (this.state.searchValue.length === 0) {
      navigate('/search-results')
    } else {
      navigate(`/search-results?${searchKey}=${this.state.searchValue}`)
    }
  }

  render() {
    return (
      <div className="m-search">
        <form className="m-search__form" onSubmit={e => this.onSubmitSearch(e)}>
          <SearchField
            componentClass="a-search m-search__form-input"
            value={this.state.searchValue}
            action={e => this.setSearchParams(e)}
          />
          <Button
            className="m-search__form-submit"
            type="submit"
            disabled={this.state.isEmpty}
          >
            Search
          </Button>
        </form>
      </div>
    )
  }
}

export default Search
