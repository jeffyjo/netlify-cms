import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../../util/Content'
import Image from '../../01-atoms/Image/Image'

import './MarkdownBlock.scss'

const MarkdownBlock = ({ item, className }) => {
  const { body, image, contentOrientation, imagePosition } = item
  console.log('mdb', body, image, contentOrientation, imagePosition)

  let pageContent = body || Content
  let imagePositionClass = ''
  let contentOrientationClass = ''

  switch(imagePosition) {
    case "top":
      imagePositionClass = "o-markdown-block--image-top"
      break
    case "right":
      imagePositionClass = "o-markdown-block--image-right"
      break
    case "bottom":
      imagePositionClass = "o-markdown-block--image-bottom"
      break
    case "left":
      imagePositionClass = "o-markdown-block--image-left"
      break;
    default:
      break
  }

  contentOrientationClass = contentOrientation === 'vertical' ? 'o-markdown-block--vertical' : 'o-markdown-block--horizontal'

  return (
    <section className={`section ${className}`}>
      <div className={`o-markdown-block ${contentOrientationClass} ${imagePositionClass}`}>
        <div className="o-markdown-block__text">{pageContent}</div>
        <div className="o-markdown-block__image">
          <Image imageUrl={image.publicURL} className="o-markdown-block__image-asset" />
        </div>
      </div>
    </section>
  )
}

MarkdownBlock.propTypes = {
  
}

export default MarkdownBlock