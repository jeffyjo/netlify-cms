import React from 'react'
import Proptypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

import './Link.scss'

const Link = ({ children, url, className }) => {
  console.log('className', className)
  return (
    <GatsbyLink 
      className={"a-link " + (className ? className : '') }
      to={url}>
        {children}
    </GatsbyLink>
  )
}

Link.propsTypes = {
  linkText: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired
}

export default Link