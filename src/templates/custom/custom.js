import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/util/Layout'
import MarkdownBlock from '../../components/03-organisms/MarkdownBlock/MarkdownBlock'

import './custom.scss'

export const CustomTemplate = ({ 
  title, 
  content,
  columns
}) => {

  let colunmClass = `p-custom__content--col-${columns}`

  console.log('columns', columns, typeof columns)
  return (
    <Layout>
      <div className={`p-custom ${colunmClass}`}>
        <h1 className="p-custom__title">{title}</h1>
        <div className="p-custom__content">
          {content 
            ? content.map( (contentEl, i) => {
              console.log('contentEl', contentEl)
              return <MarkdownBlock key={`mdb${i}`} item={contentEl} className="p-custom__content-block" />
            }) 
            : null
          }
        </div>
      </div>
    </Layout>
  )
}

export const CustomPage = ({ data }) => {
  let { title, columns, content } = data.markdownRemark.frontmatter
  return (
    <CustomTemplate 
      title={title}
      columns={columns}
      content={content}
    />
  )
}

export default CustomPage

CustomTemplate.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.number,
  content: PropTypes.array
}

export const PageQuery = graphql`
  query customPagesQuery($id: String!) {
    markdownRemark(id: { eq: $id}) {
      id
      frontmatter {
        title
        columns
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