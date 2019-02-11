import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/util/Layout'
import Grid from '../components/03-organisms/Grid/Grid'

import SearchObservable from '../components/util/SearchObservable'
import { fromParamsToObject } from '../components/util/Util'

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
        <section>
          {this.state.pages.length === 0
            ? <h2>No results</h2>
            : <Grid items={this.state.pages} />
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