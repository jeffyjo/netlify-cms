import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/util/Layout'

import TagList from '../components/02-molecules/TagList/TagList'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tagLinks = posts.map(post => (
      <li key={post.node.fields.slug} className="m-tag-item">
        <Link to={post.node.fields.slug} className="m-tag-item__link">
          <h2 className="a-tag-link">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <section>
          <Helmet title={`${tag} | ${title}`} />
          <div className="o-tags">
            <h3 className="o-tags__header">{tagHeader}</h3>
            <TagList>{tagLinks}</TagList>
            <p>
              <Link className="o-tags__link" to="/tags/">Browse all tags</Link>
            </p>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
