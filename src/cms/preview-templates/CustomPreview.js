import React from 'react'
import PropTypes from 'prop-types'
import { CustomTemplate } from '../../templates/custom/custom'

const CustomPagePreview = ({ entry, widgetFor }) => {
  return (
    <CustomTemplate 
      title={entry.getIn(['data', 'title'])}
      content={entry.getIn(['data', 'content'],)}
      contentOrientation={entry.getIn(['data', 'contentOrientation'])}
      imagePosition={entry.getIn(['data', 'imagePosition'])}
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