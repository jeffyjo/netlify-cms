import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/util/Layout'
import Content, { HTMLContent } from '../components/util/Content'

export const ArticleTemplate = ({ 
  title, 
  content, 
  contentComponent, 
  date,
}) => {
  const PageContent = contentComponent || Content

  return(
    <article>
      <h1>{title}</h1>
      <p>{date}</p>
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