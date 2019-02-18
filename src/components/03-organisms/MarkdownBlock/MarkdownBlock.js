import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../../util/Content'
import Image from '../../01-atoms/Image/Image'

import './MarkdownBlock.scss'

const MarkdownBlock = ({item}) => {
  const { body, image, contentOrientation, imagePosition } = item
  console.log('mdb', body, image, contentOrientation, imagePosition)

  let pageContent = body || Content

  return (
    <section className="section">
      <div className={`o-markdown-block`}>
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