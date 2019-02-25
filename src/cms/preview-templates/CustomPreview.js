import React from 'react'
import PropTypes from 'prop-types'
import { CustomTemplate } from '../../templates/custom/custom'

const CustomPagePreview = ({ entry, widgetFor }) => {
  return (
    <CustomTemplate 
      title={entry.getIn(['data', 'title'])}
      columns={widgetFor('columns')}
      heroPosition={entry.getIn(['data', 'heroPosition'])}
      content={entry.getIn(['data', 'content'])}
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