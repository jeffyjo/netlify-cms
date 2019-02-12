import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/util/Layout'
import Content, { HTMLContent } from '../../components/util/Content'

import ArticleHeader from '../../components/02-molecules/ArticleHeader/ArticleHeader'
import TagList from '../../components/02-molecules/TagList/TagList'

import './article.scss'

export const ArticleTemplate = ({ 
  title, 
  content, 
  contentComponent, 
  date,
  imageUrl,
  timeToRead,
  headerPosition,
  tags
}) => {
  const PageContent = contentComponent || Content

  return(
    <article className="o-article">
      <ArticleHeader title={title} date={date} imageUrl={imageUrl} timeToRead={timeToRead} headerPosition={headerPosition}  />
      <PageContent content={content} className="o-article__content" />
      <TagList tags={tags} />
    </article>
  )
}

ArticleTemplate.prototypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  date: PropTypes.string,
  imageUrl: PropTypes.string,
  timeToRead: PropTypes.number,
  headerPosition: PropTypes.string.isRequired,
  tags: PropTypes.array
}

const ArticlePage = ({data}) => {
  // Contains all data
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
        headerPosition={post.frontmatter.headerPosition}
        tags={post.frontmatter.tags}
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
        headerPosition
        tags
        image {
          publicURL
        }
      }
    }
  }
`