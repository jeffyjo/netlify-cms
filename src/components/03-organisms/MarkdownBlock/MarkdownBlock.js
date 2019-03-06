import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../../util/Content'
import Image from '../../01-atoms/Image/Image'
import { getImagePositionClass, getBlockWidth } from './util'

import './MarkdownBlock.scss'

const MarkdownBlock = ({ item, className }) => {
  const { body, image, contentOrientation, imagePosition, width } = item

  const PageContent = HTMLContent || Content
  let widthClasses = getBlockWidth(width)
  let imagePositionClass = getImagePositionClass(imagePosition)
  let contentOrientationClass =
    contentOrientation === 'vertical'
      ? 'o-markdown-block--vertical'
      : 'o-markdown-block--horizontal'

  return (
    <section className={`section ${className} ${widthClasses.toString().replace(/,/g, ' ')}`}>
      <div
        className={`o-markdown-block ${contentOrientationClass} ${imagePositionClass}`}
      >
        <PageContent content={body} className="o-markdown-block__text" />
        <div className="o-markdown-block__image">
          {image ? (
            <Image
              imageUrl={image.publicURL}
              className="o-markdown-block__image-asset"
            />
          ) : null}
        </div>
      </div>
    </section>
  )
}

MarkdownBlock.propTypes = {
  item: PropTypes.shape({
    body: PropTypes.string,
    image: PropTypes.shape({
      publicURL: PropTypes.string,
    }),
    contentOrientation: PropTypes.string,
    imagePosition: PropTypes.string,
  }),
  className: PropTypes.string,
}

export default MarkdownBlock
