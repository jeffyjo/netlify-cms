import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TestPageTemplate = ({ title, content, contentComponent}) => {
  const PageContent = contentComponent || Content
  console.log('PageContent', PageContent)

  return (
    <section>
      <h1 className="title">{title}</h1>
      <PageContent className="content" content={content} />
    </section>
  )
}

TestPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const TestPage = ({data}) => {
  const { markdownRemark: post } = data

  return ( 
    <Layout>
      <TestPageTemplate  
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

export default TestPage

export const aboutPageQuery = graphql`
  query TestPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`