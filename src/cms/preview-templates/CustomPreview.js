import React from 'react'
import PropTypes from 'prop-types'
import { CustomTemplate } from '../../templates/custom/custom'

const CustomPagePreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  let { content } = data
  content.map( contentItem => {
    contentItem.image = {
      publicURL: contentItem.image
    }
  })

  let hero = {
    title: entry.getIn(['data', 'title']),
    heroPosition: entry.getIn(['data', 'heroPosition']),
    heroBackground: {
      publicURL: entry.getIn(['data', 'heroBackground'])
    }
  }

  return (
    <CustomTemplate 
      columns={entry.getIn(['data', 'columns'])}
      content={content}
      hero={hero}
    />
  )
}

CustomPagePreview.proptTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default CustomPagePreview