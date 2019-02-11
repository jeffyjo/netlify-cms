import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/util/Layout'
import Grid from '../../components/03-organisms/Grid/Grid'

import SearchObservable from '../../components/util/SearchObservable'
import { fromParamsToObject } from '../../components/util/Util'
import './search-results.scss'

class SearchResults extends Component  {
  
  constructor(props) {
    super(props)

    this.fullList = props.data.allMarkdownRemark.edges
    
    this.state = {
      pages: this.fullList
    }

    this.filterResults = this.filterResults.bind(this)
  }

  componentDidMount() {
    SearchObservable.subscribe((data) => this.filterResults(data))
    
    const searchQuery = fromParamsToObject()
    this.filterResults(searchQuery.search)
  }

  filterResults(searchValue) {
    let pages = searchValue.length > 0
      ? this.fullList.filter( page => {
          const { title } = page.node.frontmatter
          return (title.toLowerCase().indexOf(searchValue.toLowerCase())) !== -1
        })
      : this.fullList

    this.setState({
      pages: pages
    })
  }

  render() {
    return(
      <Layout>
        <section className="o-search-results">
          {this.state.pages.length === 0
            ? <h2 className="o-search-results__heading">No results</h2>
            : 
            <div>
              <h2 className="o-search-results__heading">Results</h2>
              <Grid items={this.state.pages} />
            </div>
          }
        </section>
      </Layout>
    )
  }
}

SearchResults.protoTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const searchResultsQuery = graphql`
query searchResultQuery {
  allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "article" } }}) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          tags
        }
        fields {
          slug
        }
      }
    }
  }
}`

export default SearchResults