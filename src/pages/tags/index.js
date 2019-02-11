import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/util/Layout'
import TagList from '../../components/02-molecules/TagList/TagList';
import './tags.scss'

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout>
    <section className="">
      <Helmet title={`Tags | ${title}`} />
      <div className="o-tags">
        <h1 className="o-tags__header">Tags</h1>
        {/* <TagList> */}
        <div className="o-grid">
          {group.map(tag => (
            <li key={tag.fieldValue} className="o-tags__item">
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} className="o-tags__item-link">
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </div>
        {/* </TagList> */}
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
