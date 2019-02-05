import React from 'react'
import PropTypes from 'react'

const ArticlesTemplate = ({content, contentComponent, title, slug}) => {
  const PostContent = contentComponent || Content

  return (
    <section>
      Article
    </section>
  )
} 

ArticlesTemplate.propTypes = {
  content: PropTypes.node,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  slug: PropTypes.string
}

const Articles = ({data}) => {
  
}