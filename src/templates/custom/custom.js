import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/util/Layout'
import MarkdownBlock from '../../components/03-organisms/MarkdownBlock/MarkdownBlock'

export const CustomTemplate = ({ 
  title, 
  content
}) => {
  return (
    <Layout>
      <div className="p-custom">
        <h1>{title}</h1>
        {content 
          ? content.map( (contentEl, i) => {
            console.log('contentEl', contentEl)
            return <MarkdownBlock key={`mdb${i}`} item={contentEl} />
          }) 
          : null
        }
      </div>
    </Layout>
  )
}

export const CustomPage = ({ data }) => {
  let { title, content } = data.markdownRemark.frontmatter
  return (
    <CustomTemplate 
      title={title}
      content={content}
    />
  )
}

export default CustomPage

CustomTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array
}

export const PageQuery = graphql`
  query customPagesQuery($id: String!) {
    markdownRemark(id: { eq: $id}) {
      id
      frontmatter {
        title
        content {
          body
          contentOrientation
          imagePosition
          image {
            publicURL
          }
        }
      }
    }
  }
`