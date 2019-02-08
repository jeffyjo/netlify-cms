import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/util/Layout'
import Grid from '../components/03-organisms/Grid/Grid'

class SearchResults extends Component  {
  render() {
    const { edges: pages } = this.props.data.allMarkdownRemark
    return(
      <Layout>
        <section>
          <Grid items={pages} />
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