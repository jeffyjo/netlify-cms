import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TestPageTemplate = ({ title, content, contentComponent, number}) => {  
  const PageContent = contentComponent || Content

  return (
    <section>
      <h1 className="title">{title}</h1>
      <h2 className="number">{number}</h2>
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
        number={post.frontmatter.number}
      />
    </Layout>
  )
}

export default TestPage

export const TestPageQuery = graphql`
  query TestPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        number
      }
    }
  }
`