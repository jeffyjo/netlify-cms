import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './LinkIcon.scss'

import logo from '../../../img/logo.svg'

const LinkIcon = ({ url }) => {
  return (
    <Link to={url} className="a-logo" title="Logo">
      <img src={logo} alt="Pentia" />
    </Link>
  )
}

LinkIcon.propTypes = {
  url: PropTypes.string.isRequired,
}

export default LinkIcon
