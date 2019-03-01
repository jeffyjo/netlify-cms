import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/util/Layout'
import Content, { HTMLContent } from '../../components/util/Content'
import ListItem from '../../components/02-molecules/ListItem/ListItem.js'

export const CustomList = ({ data }) => {
  const { edges : customPages } = data.allMarkdownRemark
  return (
    <Layout>
      <section className="o-search-results">
        <h1>CustomList</h1>
        <ul className="o-list">
          {customPages.map( (page, i) => <ListItem key={`cs${i}`} item={page} />)}
        </ul>  
      </section>
    </Layout>
  )
} 

CustomList.propTypes = {

}

export default CustomList

export const PageQuery = graphql`
  query CustomInexQuery {
    allMarkdownRemark(filter: { frontmatter : { templateKey : { eq: "custom"} }}) {
      edges {
        node {
          id
          frontmatter {
            templateKey
            title
            content {
              body
              contentOrientation
              imagePosition
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
