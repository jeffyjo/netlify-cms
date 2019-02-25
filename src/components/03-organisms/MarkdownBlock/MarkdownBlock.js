import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../../util/Content'
import Image from '../../01-atoms/Image/Image'

import './MarkdownBlock.scss'

const MarkdownBlock = ({ item, className }) => {
  const { body, image, contentOrientation, imagePosition } = item
  console.log('body', body)
  console.log('contentOrientation', contentOrientation)
  console.log('imagePosition', imagePosition)

  const PageContent = HTMLContent || Content
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
        <PageContent content={body} className="o-markdown-block__text" />
        <div className="o-markdown-block__image">
          {image ? <Image imageUrl={image.publicURL} className="o-markdown-block__image-asset" /> : null}
        </div>
      </div>
    </section>
  )
}

MarkdownBlock.propTypes = {
  item: PropTypes.shape({
    body: PropTypes.string,
    image: PropTypes.shape({
      publicURL: PropTypes.string
    }),
    contentOrientation: PropTypes.string,
    imagePosition: PropTypes.string
  }),
  className: PropTypes.string
}

export default MarkdownBlock