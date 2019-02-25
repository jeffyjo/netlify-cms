import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../../components/util/Layout'
import MarkdownBlock from '../../components/03-organisms/MarkdownBlock/MarkdownBlock'
import Hero from '../../components/03-organisms/Hero/Hero'

import './custom.scss'

export const CustomTemplate = ({ 
  title, 
  content,
  columns,
  heroPosition
}) => {
  console.log('content', content)
  let colunmClass = columns ? `p-custom__content--col-${columns}` : ''
  return (
    <div className={`p-custom ${colunmClass}`}>
      <Hero title={title} className={heroPosition ? heroPosition : ''} />
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
  )
}

export const CustomPage = ({ data }) => {
  let { title, columns, content, heroPosition } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <CustomTemplate 
        title={title}
        columns={columns}
        content={content}
        heroPosition={heroPosition}
      />
    </Layout>
  )
}

export default CustomPage

CustomTemplate.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.string,
  content: PropTypes.array
}

export const PageQuery = graphql`
  query customPagesQuery($id: String!) {
    markdownRemark(id: { eq: $id}) {
      id
      frontmatter {
        title
        columns
        heroPosition
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