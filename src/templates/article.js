import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ArticleTemplate = ({ 
  title, 
  content, 
  contentComponent, 
  date,
  path 
}) => {
  console.log('path', path)
  console.log('date', date)
  const PageContent = contentComponent || Content

  return(
    <article>
      <h1>{title}</h1>
      <date>{date}</date>
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
        path={path}
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
        path
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`