import React from 'react'
import PropTypes from 'prop-types'
import { ArticleTemplate } from '../../templates/article'

const ArticlePagePreview = ({ entry, widgetFor }) => {
	return (
		<ArticleTemplate 
			title={entry.getIn(['data', 'title'])}
			content={widgetFor('body')}
      date={widgetFor('date')}
      path={entry.getIn(['data', 'path'])}
		/>
	)
}

ArticlePagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
}

export default ArticlePagePreview