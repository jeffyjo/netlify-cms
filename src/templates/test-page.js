import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TestPageTemplate = ({ title, content, contentComponent, number, bool}) => {  
  console.log('bool', bool)
  const PageContent = contentComponent || Content

  return (
    <section>
      <h1 className="title">{title}</h1>
      <h2 className="number">{number}</h2>
      <p>{bool ? "on" : "off"}</p>
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
        bool={post.frontmatter.bool}
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
        bool
      }
    }
  }
`