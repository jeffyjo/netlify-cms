import React from 'react'
import PropTypes from 'prop-types'
import { CustomTemplate } from '../../templates/custom/custom'

const CustomPagePreview = ({ entry, getAsset }) => {
  const data = entry.get('data').toJS()
  let { content } = data

  content.map(contentItem => {
    contentItem.image = {
      publicURL: getAsset(contentItem.image).public_path,
    }
  })

  let hero = {
    title: data.title,
    heroPosition: data.heroPosition,
    heroBackground: {
      publicURL: getAsset(entry.getIn(['data', 'heroBackground'])).public_path,
    },
    heroTextColor: data.heroTextColor,
  }

  return <CustomTemplate content={content} hero={hero} />
}

CustomPagePreview.proptTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CustomPagePreview
