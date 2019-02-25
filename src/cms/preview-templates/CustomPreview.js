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

  return (
    <CustomTemplate 
      title={entry.getIn(['data', 'title'])}
      columns={entry.getIn(['data', 'columns'])}
      heroPosition={entry.getIn(['data', 'heroPosition'])}
      content={content}
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