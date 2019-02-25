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
  console.log('title', title)
  console.log('content', content)
  console.log('columns', columns)
  console.log('heroPosition', heroPosition)
  let colunmClass = columns ? `p-custom__content--col-${columns.toString()}` : ''
  return (
    <Layout>
      <div className={`p-custom ${colunmClass}`}>
      <Hero title={title} className="o-hero--center" />
        {/* <div className="p-custom__content">
          {content 
            ? content.map( (contentEl, i) => {
              return <MarkdownBlock key={`mdb${i}`} item={contentEl} className="p-custom__content-block" />
            }) 
            : null
          }
        </div> */}
      </div>
    </Layout>
  )
}

export const CustomPage = ({ data }) => {
  let { title, columns, content, heroPosition } = data.markdownRemark.frontmatter
  return (
    <CustomTemplate 
      title={title}
      columns={columns}
      content={content}
      heroPosition={heroPosition}
    />
  )
}

export default CustomPage

CustomTemplate.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.number,
  content: PropTypes.object
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