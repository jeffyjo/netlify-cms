import React from 'react'
import PropTypes from 'prop-types'
import { ArticleTemplate } from '../../templates/article/article'

const ArticlePagePreview = ({ entry, widgetFor }) => {
  return (
    <ArticleTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      date={widgetFor('date')}
      tags={entry.getIn(['data', 'tags'])}
      image={entry.getIn(['data', 'image'])}
      headerPosition={widgetFor('headerPosition')}
    />
  )
}

ArticlePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArticlePagePreview
