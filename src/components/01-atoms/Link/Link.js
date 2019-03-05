import React from 'react'
import Proptypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

import './Link.scss'

const Link = ({ children, to, className }) => {
  return (
    <GatsbyLink className={'a-link ' + (className ? className : '')} to={to}>
      {children}
    </GatsbyLink>
  )
}

Link.propsTypes = {
  linkText: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired,
  className: Proptypes.string,
}

export default Link
