import React from 'react'
import PropTypes from 'prop-types'
import { CustomTemplate } from '../../templates/custom/custom'

const CustomPagePreview = ({ entry, widgetFor }) => {
  return (
    <CustomTemplate 
      title={entry.getIn(['data', 'title'])}
      columns={entry.getIn(['data', 'columns'])}
      heroPosition={entry.getIn(['data', 'heroPosition'])}
      // content={widgetFor('content')}
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