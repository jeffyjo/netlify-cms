import React from 'react'
import PropTypes from 'prop-types'
import { TestPageTemplate } from '../../templates/test-page'

const TestPagePreview = ({ entry, widgetFor }) => {
	
	return (
		<TestPageTemplate
			title={entry.getIn(['data', 'title'])}
			content={widgetFor('body')}
      number={widgetFor('number')}
      bool={widgetFor('bool')}
		/>
	)
}

TestPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	widgetFor: PropTypes.func,
}

export default TestPagePreview
