import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/util/Layout'
import MarkdownBlock from '../../components/03-organisms/MarkdownBlock/MarkdownBlock'
import Hero from '../../components/03-organisms/Hero/Hero'

import './custom.scss'

export const CustomTemplate = ({ 
  content,
  columns,
  hero
}) => {
  // console.log('hero', hero)
  let colunmClass = columns ? `p-custom__content--col-${columns}` : ''
  return (
    <div className={`p-custom ${colunmClass}`}>
      <Hero {...hero} />
        <div className="p-custom__content">
          {content 
            ? content.map( (contentEl, i) => {
              return <MarkdownBlock key={`mdb${i}`} item={contentEl} className="p-custom__content-block" />
            }) 
            : null
          }
        </div>
    </div>
  )
}

export const CustomPage = ({ data }) => {
  let { title, columns, content, heroPosition, heroBackground, heroTextColor } = data.markdownRemark.frontmatter
  const hero = {
    title,
    heroPosition,
    heroBackground,
    heroTextColor
  }

  return (
    <Layout>
      <CustomTemplate
        hero={hero} 
        title={title}
        columns={columns}
        content={content}
        heroPosition={heroPosition}
        heroBackground={heroBackground}
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
        heroTextColor
        heroBackground {
          publicURL
        }
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