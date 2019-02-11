import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/util/Layout'
import Content, { HTMLContent } from '../../components/util/Content'

import ArticleHeader from '../../components/02-molecules/ArticleHeader/ArticleHeader'

export const ArticleTemplate = ({ 
  title, 
  content, 
  contentComponent, 
  date,
  imageUrl,
  timeToRead
}) => {
  const PageContent = contentComponent || Content

  return(
    <article className="o-article">
      <ArticleHeader title={title} date={date} imageUrl={imageUrl} timeToRead={timeToRead} />
      <PageContent content={content} />
    </article>
  )
}

ArticleTemplate.prototypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  date: PropTypes.string,
  imageUrl: PropTypes.string,
  timeToRead: PropTypes.number
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
        imageUrl={
          post.frontmatter.image 
          ? post.frontmatter.image.publicURL
          : ''
        }
        timeToRead={post.timeToRead}
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
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          publicURL
        }
      }
    }
  }
`