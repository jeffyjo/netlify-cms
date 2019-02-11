import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/util/Layout'
import Content, { HTMLContent } from '../components/util/Content'

import DateStamp from '../components/01-atoms/DateStamp/DateStamp'

export const ArticleTemplate = ({ 
  title, 
  content, 
  contentComponent, 
  date,
  image
}) => {
  const PageContent = contentComponent || Content
  console.log('image', image)

  return(
    <article className="o-article">
      <h1>{title}</h1>
      <DateStamp date={date} />
      <PageContent content={content} />
    </article>
  )
}

ArticleTemplate.prototypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const ArticlePage = ({data}) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ArticleTemplate 
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

export default ArticlePage

export const pageQuery = graphql`
  query articleQuery($id: String!){
    markdownRemark(id: { eq: $id}) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`