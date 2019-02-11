import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/util/Layout'
import './tags.scss'

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout>
    <section className="">
      <Helmet title={`Tags | ${title}`} />
      <div className="p-tags">
        <h1 className="p-tags__header">Tags</h1>
        <ul className="o-list">
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} className="m-list-item">
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
